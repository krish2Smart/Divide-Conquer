package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class CabBooking
 */
@WebServlet("/CabBooking")
public class CabBooking extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CabBooking() {
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
			String bookingReferenceID = request.getParameter("booking-reference-id");
			Map<String, String> mp = new TreeMap<String, String>();
			try {
				PreparedStatement ps1 = Database.getStmt("select id from cab_allocation where reference_id = ?");
				ps1.setString(1, bookingReferenceID);
				ResultSet rs1 = ps1.executeQuery();
				if(rs1.next()) {
					throw new Exception("Cab is already booked under your reference id");
				} else {
					PreparedStatement ps2 = Database.getStmt("select * from cab_details where id not in (select driver_id from cab_allocation where booked_date != (select check_in from occupancy_details where reference_id = ?))");
					ps2.setString(1, bookingReferenceID);
					ResultSet rs2 = ps2.executeQuery();
					if(rs2.next()) {
						PreparedStatement ps3 = Database.getStmt("select person_name, mail_id, check_in, phone_no from occupancy_details where reference_id = ?");
						ps3.setString(1, bookingReferenceID);
						ResultSet rs3 = ps3.executeQuery();
						if(rs3.next()) {
							PreparedStatement ps4 = Database.getStmt("insert into cab_allocation(driver_id, booked_date, booked_person, reference_id) values(?, ?, ?, ?)");
							ps4.setString(1, rs2.getString(1));
							ps4.setDate(2, rs3.getDate(3));
							ps4.setString(3, rs3.getString(1));
							ps4.setString(4, bookingReferenceID);
							ps4.executeUpdate();
							SendMail sd = new SendMail("Hi "+rs3.getString(1)+" your cab is booked and our customer support team will contact you for placing pick up time\nCab Details :\n Driver Name :"+rs2.getString(2)+"\n Driver Phone No : "+rs2.getString(3), "Nala Resort - Cab Booked", rs3.getString(2));
							sd.send();
							sd = new SendMail("Hi our customer,"+rs3.getString(1)+" is booked a cab for their requested date.As our duty to contact them and place a pickup time.Contact Number : "+rs3.getString(4), "Cab Booked", "nala.customercare@gmail.com");
							sd.send();
							mp.put("code", "1");
							mp.put("message", "We had sent mail about cab details");
						}
					} else {
						PreparedStatement ps3 = Database.getStmt("select  person_name, phone_no, mail_id from occupancy_details where reference_id = ?");
						ResultSet rs3 = ps3.executeQuery();
						if(rs3.next()) {
							SendMail sd = new SendMail("Hi our customer,"+rs3.getString(1)+" who is trying to book a cab which is not available for their requested date.As our duty to contact them and book alternate cab.Contact Number : "+rs1.getString(2), "Cab is Unavailable", "krishragul143@gmail.com");
							sd.send();
						}
						throw new Exception("Our cab services is not available for your requested date, we will contact you shortly");
					}
				}
				out.println(new Gson().toJson(mp));
				out.flush();
				out.close();
			} catch(Exception e) {
				mp.put("code", "0");
				mp.put("message", e.getMessage());
				out.println(new Gson().toJson(mp));
				out.flush();
				out.close();
			}
		}
	
	}

}
