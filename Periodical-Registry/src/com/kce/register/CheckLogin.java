package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
     * Default constructor. 
     */
    public CheckLogin() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			response.setContentType("application/json");
			Map <String, String> li = new TreeMap<String, String>();
			try {
				String userName = request.getParameter("username");
				String password = request.getParameter("password");
				PreparedStatement ps = Database.getStmt("select * from register_login where username = ?");
				ps.setString(1, userName);
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					if(rs.getString(2).equals(password)) {
						Cookie ck = new Cookie("logged_user", userName);
						ck.setMaxAge(365*60*60*24);
						response.addCookie(ck);
						li.put("code", "1");
						li.put("message", "loading "+userName);
					} else {
						li.put("code", "0");
						li.put("message", "username and password doesn't match");
					}
				} else {
					li.put("code", "0");
					li.put("message", "username doesn't exist");
				}
			} catch(Exception e) {
				li.put("code", "0");
				li.put("message", e.toString());
			}
			out.println(new Gson().toJson(li));
			out.flush();
			out.close();
		}
	}

}
