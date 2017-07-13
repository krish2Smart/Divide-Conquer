package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetPublisherNames
 */
@WebServlet("/GetPublisherNames")
public class GetPublisherNames extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetPublisherNames() {
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
			String periodicalType = request.getParameter("periodicalType");
			String periodicalName = request.getParameter("periodicalName");
			List<String> li = new LinkedList<String>();
			try {
				PreparedStatement ps = Database.getStmt("select publisher_name from register_details where periodical_type = ? and periodical_name = ?");
				ps.setString(1, periodicalType);
				ps.setString(2, periodicalName);
				ResultSet rs = ps.executeQuery();
				while(rs.next()) {
					li.add(rs.getString(1));
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				li.add("error");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
