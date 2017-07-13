package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
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
 * Servlet implementation class CreateRegister
 */
@WebServlet("/CreateRegister")
public class CreateRegister extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateRegister() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			String publisherName = request.getParameter("publisherName");
			String periodicalName = request.getParameter("periodicalName");
			String periodicalType = request.getParameter("periodicalType");
			String periodicity = request.getParameter("periodicity");
			String periodFrom = request.getParameter("periodFrom");
			String periodTo = request.getParameter("periodTo");
			String journalType = request.getParameter("journalType");
			String department = request.getParameter("department");
			String publishersAddress = request.getParameter("publishersAddress");
			String supplyingAgentAddress = request.getParameter("supplyingAgentAddress");
			String DDORChequeNumber = request.getParameter("DDORChequeNumber");
			String DDORChequeAmount = request.getParameter("DDORChequeAmount");
			String DDORChequeDate = request.getParameter("DDORChequeDate");
			String placementNo = request.getParameter("placementNo");
			String subscriptionNo = request.getParameter("subscriptionNo");
			String emailID = request.getParameter("emailID");
			Map<String, String> li = new TreeMap<String, String>();
			try {
				Date periodFrom_date = new Date(new SimpleDateFormat("dd-MM-YYYY").parse(periodFrom).getTime());
				Date periodTo_date = new Date(new SimpleDateFormat("dd-MM-yyyy").parse(periodTo).getTime());
				Date DDORChequeDate_date = new Date(new SimpleDateFormat("dd-MM-yyyy").parse(DDORChequeDate).getTime());
 				PreparedStatement ps = Database.getStmt("insert into register_details (publisher_name, periodical_name, periodical_type, periodicity, period_from, period_to, journal_type, department, publishers_address, supplying_agent_address, ddorcheque_no, ddorcheque_amount, ddorcheque_date, placement_no, subscription_no, email_id)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				ps.setString(1, publisherName);
				ps.setString(2, periodicalName);
				ps.setString(3, periodicalType);
				ps.setString(4, periodicity);
				ps.setDate(5, periodFrom_date);
				ps.setDate(6, periodTo_date);
				ps.setString(7, journalType);
				ps.setString(8, department);
				ps.setString(9, publishersAddress);
				ps.setString(10, supplyingAgentAddress);
				ps.setString(11, DDORChequeNumber);
				ps.setString(12, DDORChequeAmount);
				ps.setDate(13, DDORChequeDate_date);
				ps.setString(14, placementNo);
				ps.setString(15, subscriptionNo);
				ps.setString(16, emailID);
				ps.executeUpdate();
				ps = Database.getStmt("select id from register_details where publisher_name = ? and periodical_name = ?");
				ps.setString(1, publisherName);
				ps.setString(2, periodicalName);
				ResultSet rs = ps.executeQuery();
				String id = null;
				while(rs.next()) {
					id = rs.getString(1);
				}
				ps = Database.getStmt("create table register_entry_"+id+" (id int, volume_no int, issue_no int, publication_date varchar(256), date_of_receipt date)");
				ps.executeUpdate();
				if(periodicity .equals("Monthly")) {
					ps = Database.getStmt("create table periodicity_"+id+" (id int, month int, year int, received int, notified int)");
					ps.executeUpdate();
					String dateParts[] = periodFrom.split("-");
					int startMonth = Integer.parseInt(dateParts[1]);
					int startYear = Integer.parseInt(dateParts[2]);
					dateParts = periodTo.split("-");
					int endMonth = Integer.parseInt(dateParts[1]);
					int endYear = Integer.parseInt(dateParts[2]);
					int month = startMonth;
					int year = startYear;
					while(!(month > endMonth && year >= endYear)) {
						ps = Database.getStmt("insert into periodicity_"+id+" values(?, ?, ?, ?, ?)");
						ps.setString(1, id);
						ps.setInt(2,  month);
						ps.setInt(3,  year);
						ps.setInt(4, 0);
						ps.setInt(5, 0);
						ps.executeUpdate();
						if(month == 12){
							month = 0;
							year++;
						}
						month++;
					}
				}
				li.put("code", "1");
				li.put("message", "success");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				li.put("code", "0");
				li.put("message", "error");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
