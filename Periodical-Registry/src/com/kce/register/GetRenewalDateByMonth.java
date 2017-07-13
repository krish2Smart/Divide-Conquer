package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.kce.register.Tables.RegisterDisplayTbl;

/**
 * Servlet implementation class GetRenewalDateByMonth
 */
@WebServlet("/GetRenewalDateByMonth")
public class GetRenewalDateByMonth extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetRenewalDateByMonth() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		String month = request.getParameter("month");
		String year = request.getParameter("year");
		try(PrintWriter out = response.getWriter()) {
			try {
				PreparedStatement ps = Database.getStmt("select id, publisher_name, periodical_name, periodical_type, periodicity, period_to from register_details where month(period_to) = ? and year(period_to) = ?");
				ps.setString(1, month);
				ps.setString(2, year);
				ResultSet rs = ps.executeQuery();
				List<RegisterDisplayTbl> li = new LinkedList<RegisterDisplayTbl>();
				while(rs.next()) {
					li.add(new RegisterDisplayTbl(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), new SimpleDateFormat("dd-MM-yyyy").format(rs.getDate(6))));
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				List<String> li = new LinkedList<String>();
				li.add("error");
				out.flush();
				out.close();
			}
		} 
	}

}
