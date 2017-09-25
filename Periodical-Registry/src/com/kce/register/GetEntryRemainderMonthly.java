package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.kce.register.Tables.EntryRemainderMonthlyTbl;

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
				Checker checker = new Checker();
				List<EntryRemainderMonthlyTbl> li = new LinkedList<EntryRemainderMonthlyTbl>();
				//PreparedStatement ps1 = Database.getStmt("select id, publisher_name, periodical_name, periodical_type, periodicity, email_id from register_details where periodicity = ?");
				PreparedStatement ps1 = Database.getStmt("select id, publisher_name, periodical_name, periodical_type, periodicity from register_details where periodicity = ?");
				ps1.setString(1, "Monthly");
				ResultSet rs1 = ps1.executeQuery();
				while(rs1.next()) {
					PreparedStatement ps2 = Database.getStmt("select month, year from periodicity_"+rs1.getString(1)+" where (received = 0) and (month < month(now()) or year < year(now()))");
					ResultSet rs2 = ps2.executeQuery();
					while(rs2.next()) {
						//SendMail sd = new SendMail("Remember", "Not received "+rs1.getString(3)+" in "+rs2.getString(1)+" and "+rs2.getString(2), rs1.getString(6));
						//sd.send();
						li.add( new EntryRemainderMonthlyTbl( rs1.getString(1), rs1.getString(2), rs1.getString(3), rs1.getString(4), rs1.getString(5), rs2.getInt(1), rs2.getInt(2) ) );
					}
				}
				Collections.sort(li, checker);
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				List<String> li = new LinkedList<String>();
				li.add("0");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}

class Checker implements Comparator<EntryRemainderMonthlyTbl> {
		
	@Override
	public int compare(EntryRemainderMonthlyTbl r1, EntryRemainderMonthlyTbl r2){
		if(r1.getYear() == r2.getYear()) {
				if(r1.getMonth() == r2.getMonth())
					return r1.getPeriodicalName().compareTo(r2.getPeriodicalName());
				else
					return r1.getMonth() - r2.getMonth();
		} else {
			return r1.getYear() - r2.getYear();
		}
	}
		
}


