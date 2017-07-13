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
 * Servlet implementation class UpdateCollectionsCDTable
 */
@WebServlet("/UpdateCollectionsCDTable")

public class UpdateCollectionsCDTable extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateCollectionsCDTable() {
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
			String numOfCDs = request.getParameter("numofcds");
			if(fileName.contains("C:\\fakepath\\")) {
				fileName = fileName.replace("C:\\fakepath\\", "");
			}
			if(department.equals("none"))
				department = degree;
			Map<String, String> li = new TreeMap<String, String>();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				Statement st = con.createStatement();
				ResultSet rs = null;
				rs = st.executeQuery("select * from col_cd where department = '"+department+"'");
				if(rs.next()) {
					st.executeUpdate("update col_cd set cd_count = "+numOfCDs+" where department = '"+department+"'");
				} else {
					st.executeUpdate("insert into col_cd values('"+degree+"','"+department+"','"+fileName+"',"+numOfCDs+")");
				}
				rs = st.executeQuery("select file_name from col_cd where department = '"+department+"'");
				if(rs.next()) {
					li.put("path", "Collections");
					li.put("filename", rs.getString(1));
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