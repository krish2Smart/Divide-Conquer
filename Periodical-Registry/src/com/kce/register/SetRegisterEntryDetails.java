package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.kce.register.Tables.RegisterEntryTbl;

/**
 * Servlet implementation class SetRegisterEntryDetails
 */
@WebServlet("/SetRegisterEntryDetails")
public class SetRegisterEntryDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SetRegisterEntryDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			String id = request.getParameter("id");
			String volumeNo = request.getParameter("volumeNo");
			String issueNo = request.getParameter("issueNo");
			String publicationDate = request.getParameter("publicationDate");
			String dateOfReceipt = request.getParameter("dateOfReceipt");
			String months [] = {"jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"};
			response.setContentType("application/json");
			try {
				Date dateOfReceipt_date = new Date(new SimpleDateFormat("dd-MM-yyyy").parse(dateOfReceipt).getTime());
				PreparedStatement ps = Database.getStmt("insert into register_entry_"+id+" values(?, ?, ?, ?, ?)");
				ps.setString(1, id);
				ps.setString(2, volumeNo);
				ps.setString(3, issueNo);
				ps.setString(4, publicationDate);
				ps.setDate(5, dateOfReceipt_date);
				ps.executeUpdate();
				ps = Database.getStmt("select periodicity from register_details where id = ?");
				ps.setString(1, id);
				ResultSet rs = ps.executeQuery();
				String periodicity = null;
				if(rs.next()) {
					periodicity = rs.getString(1);
				}
				if(periodicity.equals("Monthly")) {
					String dateParts[] = publicationDate.split(" ");
					String monthStr = dateParts[1];
					int year = Integer.parseInt(dateParts[2]);
					int monthNum = 0;
					for(int i = 1; i <= 12; i++) {
						if(months[i-1].equals(monthStr.toLowerCase())) {
							monthNum = i;
							break;
						}
					}
					ps = Database.getStmt("update periodicity_"+id+" set received = 1 where month = ? and year = ?");
					ps.setInt(1, monthNum);
					ps.setInt(2, year);
					ps.executeUpdate();
				}
				rs = null;
				ps = Database.getStmt("select * from register_entry_"+id+"");
				rs = ps.executeQuery();
				List<RegisterEntryTbl> li = new LinkedList<RegisterEntryTbl>();
				while(rs.next()) {
					li.add(new RegisterEntryTbl(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), new SimpleDateFormat("dd-MM-yyyy").format(rs.getDate(5))));
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch (Exception e) {
				List<String> li = new LinkedList<String>();
				li.add("error");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
