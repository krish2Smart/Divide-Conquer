package com.kce.library.users;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
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
 * Servlet implementation class FeedbackDB
 */
@WebServlet("/FeedbackDB")
public class FeedbackDB extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FeedbackDB() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			response.setContentType("application/json");
			try {
				String name = request.getParameter("name");
				String emailId = request.getParameter("emailId");
				String mobNo = request.getParameter("mobNo");
				String rollNo = request.getParameter("rollNo");
				String feedback = request.getParameter("feedback");
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/library","root","");
				Statement st = con.createStatement();		
				st.executeUpdate("insert into feedbackform (name, emailId, mobNo, rollNo, feedback) values ('"+name+"','"+emailId+"','"+mobNo+"','"+rollNo+"','"+feedback+"')");
				con.close();
			} catch(Exception e) {
				System.out.println(e);
			}
		}
	}

}
