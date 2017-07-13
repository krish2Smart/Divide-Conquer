package com.kce.library.admin;

import java.io.File;
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
 * Servlet implementation class UpdateQPapers
 */
@WebServlet("/UpdateQPapers")
public class UpdateQPapers extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateQPapers() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			 String degree = request.getParameter("degree");
			 String department = request.getParameter("department");
			 String category = request.getParameter("category");
			 String year = request.getParameter("year");
			 String semester = request.getParameter("semester");
			 Map<String, String> li = new TreeMap<String, String>();
			 try {
				 Class.forName("com.mysql.jdbc.Driver");
				 Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				 Statement st = con.createStatement();
				 ResultSet rs = null;
				 rs = st.executeQuery("select * from qpapers where department = '"+department+"' ");
				 String savePath = "C:\\Program Files\\Apache Software Foundation\\Tomcat 8.0\\webapps\\Library\\pdf\\"+category+"\\"+department;
				 File fileSaveDir=new File(savePath);
		         if(!fileSaveDir.exists()){
		             fileSaveDir.mkdir();
		         }
				 if(!rs.next()) {
					 st.executeUpdate("insert into qpapers values ('"+department+"', '"+degree+"')");
				 }
				 li.put("path", category+"\\"+department+"\\"+year);
				 li.put("filename", semester+".pdf");
				 out.println(new Gson().toJson(li));
				 out.flush();
				 out.close();
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
