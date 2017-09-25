package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import com.google.gson.Gson;
import com.kce.register.Tables.EntryRemainderWeeklyTbl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GetEntryRemainderWeekly
 */
@WebServlet("/GetEntryRemainderWeekly")
public class GetEntryRemainderWeekly extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetEntryRemainderWeekly() {
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
			try{
				PreparedStatement ps = Database.getStmt("select id, publisher_name, periodical_name, periodical_type, periodicity from register_details where periodicity = ?");
				ps.setString(1, "Weekly");
				ResultSet rs = ps.executeQuery();
				List<EntryRemainderWeeklyTbl> li = new LinkedList<EntryRemainderWeeklyTbl>();
				Calendar cal = Calendar.getInstance();
				int week = cal.get(Calendar.WEEK_OF_YEAR);
				int year = cal.get(Calendar.YEAR);
				while(rs.next()) {
					PreparedStatement ps1 = Database.getStmt("select week, year from periodicity_"+rs.getString(1)+" where received = 0 and (week < ? or year < ?)");
					ps1.setInt(1, week);
					ps1.setInt(2, year);
					ResultSet rs1 = ps1.executeQuery();
					SimpleDateFormat df = new SimpleDateFormat("dd MMM yyyy");
					while(rs1.next()) {
						cal.clear();
						cal.set(Calendar.WEEK_OF_YEAR, rs1.getInt(1));
						cal.set(Calendar.YEAR, rs1.getInt(2));
						Date start = cal.getTime();
						String startStr = df.format(start);
						String startSplit[] = startStr.trim().split(" ");
						cal.add(Calendar.DAY_OF_YEAR, 6);
						Date end = cal.getTime();
						String endStr = df.format(end);
						String endSplit[] = endStr.trim().split(" ");
						String entryDate = null;
						if(startSplit[1].equals(endSplit[1])) {
							entryDate = startSplit[0]+" - "+endSplit[0]+" "+startSplit[1]+" "+startSplit[2];
						} else if(startSplit[2].equals(endSplit[2])) {
							entryDate = startSplit[0]+" "+startSplit[1]+" - "+endSplit[0]+" "+endSplit[1]+" "+startSplit[2];
						} else {
							entryDate = startSplit[0]+" "+startSplit[1]+" "+startSplit[2]+" - "+endSplit[0]+" "+endSplit[1]+" "+endSplit[2];
						}
						li.add(new EntryRemainderWeeklyTbl(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), entryDate));
					}
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				System.out.println(e);
				List<String> li = new LinkedList<String>();
				li.add("0");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
