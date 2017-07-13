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
 * Servlet implementation class AddDepartments
 */
@WebServlet("/AddDepartments")
public class AddDepartments extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddDepartments() {
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
			 String id = null;
			 if(degree.equals("B.E")) {
				 id = "be";
			 } else if(degree.equals("M.E")) {
				 id = "me";
			 } 
			 Map<String, String> li = new TreeMap<String, String>();
			 try {
				 Class.forName("com.mysql.jdbc.Driver");
				 Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				 Statement st = con.createStatement();
				 ResultSet rs,rs1 = null;
				 rs = st.executeQuery("select * from "+id+"departments where name = '"+department+"' ");
				 if(rs.next()) {
					 li.put("code", "1");
					 li.put("message", "Entered department is already exists");
				 } else {
					 st.executeUpdate("insert into "+id+"departments (name) values ('"+department+"')");
					 li.put("code", "1");
					 li.put("message", "Department is added");
					 rs1 = st.executeQuery("select * from qpapers where department = '"+department+"' ");
					 if(!rs1.next()) {
						 st.executeUpdate("insert into qpapers values ('"+department+"', '"+degree+"')");
					 }
				 }
				 out.println(new Gson().toJson(li));
				 out.flush();
				 out.close();
			 } catch(Exception e) {
				 li.put("code", "0");
				 li.put("message", e.toString());
				 out.println(new Gson().toJson(li));
				 out.flush();
				 out.close();
			 }
		}
	}

}

