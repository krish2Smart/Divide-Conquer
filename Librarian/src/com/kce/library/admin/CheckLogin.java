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
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class CheckLogin
 */
@WebServlet("/CheckLogin")
public class CheckLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckLogin() {
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
			String userName = request.getParameter("userName");
			String password = request.getParameter("password");
			Map<String, String> li = new TreeMap<String, String>();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/library", "root", "");
				Statement st = con.createStatement();
				ResultSet rs = st.executeQuery("select * from adminlogin where username='"+userName+"'");
				if(rs.next()) {
					if(password.equals(rs.getString(2))) {
						Cookie ck = new Cookie("logged_admin",userName);
						ck.setMaxAge(365*60*60*24);
						response.addCookie(ck);
						li.put("code","1");
						li.put("message","loading "+userName);
					} else {
						li.put("code","0");
						li.put("message","Password and Username desn't match");
					}
				} else {
					li.put("code","0");
					li.put("message","Username desn't exist");
				}
			} catch(Exception e) {
				li.put("code","0");
				li.put("message",e.toString());
			}
			out.println(new Gson().toJson(li));
			out.flush();
			out.close();
		}
	}
}
