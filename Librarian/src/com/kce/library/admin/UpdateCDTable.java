package com.kce.library.admin;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class UpdateCDTable
 */
@WebServlet("/UpdateCDTable")
public class UpdateCDTable extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateCDTable() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			response.setContentType("application/json");
			String degree = request.getParameter("degree");
			String department = request.getParameter("department");
			String fileName = request.getParameter("filename");
			String region = request.getParameter("region");
			String id = request.getParameter("id");
			String numOfCDs = request.getParameter("numofcds");
			if(fileName.contains("C:\\fakepath\\")) {
				fileName = fileName.replace("C:\\fakepath\\", "");
			}
			if(department.equals("none"))
				department = degree;
			String regionId = null;
			if(region.equals("NATIONAL")) {
				regionId = "nat";
			} else if(region.equals("INTERNATIONAL")) {
				regionId = "inat";
			}
			Map<String, String> li = new TreeMap<String, String>();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				Statement st = con.createStatement();
				ResultSet rs1 = null, rs2 = null;
				rs1 = st.executeQuery("select * from "+id+"_table where department = '"+department+"'");
				if(rs1.next()) {
					rs2 = st.executeQuery("select "+regionId+"_file_name from "+id+"_table where department = '"+department+"'");
					if(rs2.next()) {
						if(rs2.getString(1) == null){
							st.executeUpdate("update "+id+"_table set "+regionId+"_file_name = '"+fileName+"', "+regionId+"_count = "+numOfCDs+" where department = '"+department+"'");
						} else {
							st.executeUpdate("update "+id+"_table set "+regionId+"_count = "+numOfCDs+" where department = '"+department+"'");
						}
					}
				} else {
					st.executeUpdate("insert into "+id+"_table (degree, department, "+regionId+"_file_name, "+regionId+"_count) values('"+degree+"','"+department+"','"+fileName+"',"+numOfCDs+")");
				}
				rs1 = st.executeQuery("select "+regionId+"_file_name from "+id+"_table where department = '"+department+"'");
				String path = null;
				if(id.equals("jou")) {
					if(region.equals("INTERNATIONAL")){
						path = "Journals/InterNational";
					} else if(region.equals("NATIONAL")){
						path = "Journals/National";
					}
				} else if(id.equals("mag")) {
					if(region.equals("INTERNATIONAL")){
						path = "Magazines/InterNational";
					} else if(region.equals("NATIONAL")){
						path = "Magazines/National";
					}
				}
				if(rs1.next()) {
					li.put("path", path);
					li.put("filename", rs1.getString(1));
					out.println(new Gson().toJson(li));
					out.flush();
					out.close();
				}
			} catch(Exception e) {
				li.put("path", "0");
				li.put("message", e.toString());
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}
}