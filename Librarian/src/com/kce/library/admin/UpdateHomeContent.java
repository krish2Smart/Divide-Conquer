package com.kce.library.admin;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
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
 * Servlet implementation class UpdateHomeContent
 */
@WebServlet("/UpdateHomeContent")
public class UpdateHomeContent extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateHomeContent() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String content = request.getParameter("content");
		try(PrintWriter out = response.getWriter()) {
			response.setContentType("application/json");
			Map<String, String> li = new TreeMap<String, String>();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				PreparedStatement ps = con.prepareStatement("update home_content set content = ?");
				ps.setString(1, content);
				ps.executeUpdate();
				li.put("code", "1");
				li.put("message", "Home Content is updated successfully");
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
