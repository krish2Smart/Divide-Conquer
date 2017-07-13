package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetRenewalDateByPeriodicalName
 */
@WebServlet("/GetRenewalDateByPeriodicalName")
public class GetRenewalDateByPeriodicalName extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetRenewalDateByPeriodicalName() {
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
			String publisherName = request.getParameter("publisherName");
			String periodicalName = request.getParameter("periodicalName");
			String periodicalType = request.getParameter("periodicalType");
			Map<String, String> li = new TreeMap<String, String>();
			try {
				PreparedStatement ps = Database.getStmt("select period_to from register_details where publisher_name = ? and periodical_name = ? and periodical_type = ?");
				ps.setString(1, publisherName);
				ps.setString(2, periodicalName);
				ps.setString(3, periodicalType);
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					li.put("code", "1");
					li.put("date", new SimpleDateFormat("dd-MM-yyyy").format(rs.getDate(1)));
				} else {
					li.put("code", "0");
					li.put("date", "No results");
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch (Exception e) {
				li.put("code", "0");
				li.put("date", "No results");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
