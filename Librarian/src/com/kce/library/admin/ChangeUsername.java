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
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class ChangeUsername
 */
@WebServlet("/ChangeUsername")
public class ChangeUsername extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangeUsername() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try(PrintWriter out = response.getWriter()) {
			response.setContentType("application/json");
			String newUsername = request.getParameter("newusername");
			String oldUsername = request.getParameter("oldusername");
			try{
				Map<String, String> li = new TreeMap<String, String>();
				if(newUsername == null || oldUsername == null) {	
					li.put("code","1");
					li.put("username", "Please restart the browser , there is some issue");
				} else {
					Class.forName("com.mysql.jdbc.Driver");
					Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/library", "root", "");
					Statement st = con.createStatement();
					st.executeUpdate("update adminlogin set username ='"+newUsername+"' where username ='"+oldUsername+"'");
					if(request.getCookies() != null) {
						Cookie cks[] = request.getCookies();
						for(int i = 0; i < cks.length; i++) {
							if(cks[i].getName().equals("logged_admin")){
								cks[i].setValue(newUsername);
								response.addCookie(cks[i]);		
							}
						}
					}
					li.put("code","1");
					li.put("username", newUsername);
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				Map<String, String> li = new TreeMap<String, String>();
				li.put("code","0");
				li.put("message", e.toString());
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
