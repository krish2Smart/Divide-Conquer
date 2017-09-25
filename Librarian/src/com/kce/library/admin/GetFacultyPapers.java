package com.kce.library.admin;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetFacultyPapers
 */
@WebServlet("/GetFacultyPapers")
public class GetFacultyPapers extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetFacultyPapers() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		try(PrintWriter out = response.getWriter()) {
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				Statement st = con.createStatement();
				List<FacultyPaperTbl> li = new LinkedList<FacultyPaperTbl>();
				ResultSet rs = st.executeQuery("select * from downloads");
				while(rs.next()) {
					li.add(new FacultyPaperTbl(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6)));
				}
				out.println(new Gson().toJson(li));
			} catch(Exception e) {
				List<String> li = new LinkedList<String>();
				li.add("error");
				out.println(new Gson().toJson(li));
			}
		}
	}

}
