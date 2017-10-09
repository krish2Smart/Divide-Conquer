package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.util.Calendar;
import java.util.LinkedList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class BookYourStay
 */
@WebServlet("/BookYourStay")
public class BookYourStay extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookYourStay() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	@SuppressWarnings("deprecation")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		try(PrintWriter out = response.getWriter()) {
			try{
				SimpleDateFormat dateFormat = new SimpleDateFormat("EEE MMM dd yyyy");
				Calendar calendar = Calendar.getInstance();
				String personName = request.getParameter("person-name");
				String aadharNo = request.getParameter("aadhar-no");
				Date checkIn = new Date(dateFormat.parse(request.getParameter("check-in")).getTime());
				Date checkOut = new Date(dateFormat.parse(request.getParameter("check-out")).getTime());
				String floorNo = request.getParameter("floor-no");
				String roomType = request.getParameter("room-type");
				String roomNo = request.getParameter("room-no");
				String dryCleaning = request.getParameter("dry-cleaning");
				String laundryFacilities = request.getParameter("laundry-facilities");
				String freeNewsPapers = request.getParameter("free-news-papers");
				String phoneNo = request.getParameter("phone-no");
				String emailId = request.getParameter("email-id");
				float amountPaid = Float.parseFloat(request.getParameter("amount-paid"));
				float price = Float.parseFloat(request.getParameter("price"));
				calendar.setTime(checkIn);
				Generator generator = new ReferenceIDGenerator();
				generator.setDataMembers();
				String referenceID = generator.getGeneratedValues()+calendar.get(Calendar.DAY_OF_YEAR)+calendar.get(Calendar.YEAR)+roomNo;
				PreparedStatement ps = Database.getStmt("insert into occupancy_details(person_name, aadhar_no, check_in, check_out, phone_no, mail_id, room_no, dry_cleaning, laundry_facilities, free_newspapers, amount_paid, price, reference_id, booked_at) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now())");
				ps.setString(1, personName);
				ps.setString(2, aadharNo);
				ps.setDate(3, checkIn);
				ps.setDate(4, checkOut);
				ps.setString(5,  phoneNo);
				ps.setString(6, emailId);
				ps.setString(7, roomNo);
				ps.setString(8, dryCleaning);
				ps.setString(9, laundryFacilities);
				ps.setString(10, freeNewsPapers);
				ps.setFloat(11, amountPaid);
				ps.setFloat(12, price);
				ps.setString(13, referenceID);
				ps.executeUpdate();
				SendMail sd = new SendMail("Booking Reference ID : "+referenceID, "Nala Resort - Booking Reference ID", emailId);
				sd.send();
				Cookie cookie = new Cookie("referenceID", referenceID);
				cookie.setMaxAge(60*60);
				response.addCookie(cookie);
				LinkedList<String> list = new LinkedList<String>();
				list.add(referenceID);
				out.println(new Gson().toJson(list));
				out.flush();
				out.close();
			} catch(Exception e) {
				LinkedList<String> list = new LinkedList<String>();
				list.add("error");
				out.println(new Gson().toJson(list));
				out.flush();
				out.close();
			}
			
		}
	}

}
