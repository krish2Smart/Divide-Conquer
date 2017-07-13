package com.kce.library.admin;

import java.io.IOException;
import java.io.PrintWriter;
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
 * Servlet implementation class DeleteCookie
 */
@WebServlet("/DeleteCookie")
public class DeleteCookie extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteCookie() {
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
			boolean isDeleted = false;
			Map<String, String> li = new TreeMap<String, String>();
			if(request.getCookies() != null) {
				Cookie cks[] = request.getCookies();
				for(int i = 0; i < cks.length; i++) {
					if(cks[i].getName().equals("logged_admin")) {
						cks[i].setValue(null);
						cks[i].setMaxAge(0);
						response.addCookie(cks[i]);
						isDeleted = true;
						break;
					}
				}
			}
			if(isDeleted) {
				li.put("code", "1");
				li.put("message", "Deleted");
			} else {
				li.put("code", "0");
				li.put("message", "Not deleted");
			}
			out.println(new Gson().toJson(li));
			out.flush();
			out.close();
		}
	}
}
