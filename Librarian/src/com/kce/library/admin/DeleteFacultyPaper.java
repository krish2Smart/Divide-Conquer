package com.kce.library.admin;

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
 * Servlet implementation class DeleteFacultyPaper
 */
@WebServlet("/DeleteFacultyPaper")
public class DeleteFacultyPaper extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteFacultyPaper() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		int id = Integer.parseInt(request.getParameter("id"));
		try(PrintWriter out = response.getWriter()) {
			Map<String, String> tm = new TreeMap<String, String>();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				Statement st = con.createStatement();
				st.executeUpdate("delete from downloads where id = "+id);
				tm.put("code", "1");
				tm.put("message", "Selected faculty paper has been deleted");
				out.println(new Gson().toJson(tm));
			} catch (Exception e) {
				System.out.println(e);
				tm.put("code", "0");
				tm.put("message", e.toString());
				out.println(new Gson().toJson(tm));
			}
		}
	}

}
