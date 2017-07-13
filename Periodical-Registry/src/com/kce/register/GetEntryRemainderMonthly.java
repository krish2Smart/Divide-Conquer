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
import com.kce.register.Tables.RemainderEntryTbl;

/**
 * Servlet implementation class GetEntryRemainderMonthly
 */
@WebServlet("/GetEntryRemainderMonthly")
public class GetEntryRemainderMonthly extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetEntryRemainderMonthly() {
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
				List<RemainderEntryTbl> li = new LinkedList<RemainderEntryTbl>();
				PreparedStatement ps1 = Database.getStmt("select id, publisher_name, periodical_name, periodical_type, periodicity from register_details where periodicity = ?");
				ps1.setString(1, "Monthly");
				ResultSet rs1 = ps1.executeQuery();
				while(rs1.next()) {
					PreparedStatement ps2 = Database.getStmt("select month, year from periodicity_"+rs1.getString(1)+" where ( ( month < month( now() ) && year <= year( now() ) ) || ( month > month( now() ) && year < year( now() ) ) ) && ( received = 0 )");
					ResultSet rs2 = ps2.executeQuery();
					while(rs2.next()) {
						li.add( new RemainderEntryTbl( rs1.getString(1), rs1.getString(2), rs1.getString(3), rs1.getString(4), rs1.getString(5), rs2.getString(1), rs2.getString(2) ) );
					}
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				List<String> li = new LinkedList<String>();
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
