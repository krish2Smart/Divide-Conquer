package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class CheckCancellations
 */
@WebServlet("/CheckCancellations")
public class CheckCancellations extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckCancellations() {
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
			String emailID = request.getParameter("email-id");
			String OTP = "";
			Map<String, String> mp = new TreeMap<String, String>();
			try {
				PreparedStatement ps = Database.getStmt("select id, mail_id, check_in from occupancy_details where reference_id = ?");
				ps.setString(1, bookingReferenceID);
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					if(rs.getString(2).equals(emailID)) {
						Calendar calendar = Calendar.getInstance();
						SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
						calendar.setTime(rs.getDate(3));
						calendar.add(Calendar.DATE, -1);
						calendar.set(Calendar.HOUR_OF_DAY, 0);  
						calendar.set(Calendar.MINUTE, 0);  
						calendar.set(Calendar.SECOND, 0);  
						calendar.set(Calendar.MILLISECOND, 0);
						Date lastDate = new Date(dateFormat.parse(dateFormat.format(calendar.getTime())).getTime());
						Date today = new Date();
						if(today.compareTo(lastDate) < 0) {
							Generator generator = new OTPGenerator();
							generator.setDataMembers();
							OTP = generator.getGeneratedValues()+rs.getString(1);
							SendMail sd = new SendMail("OTP : "+OTP+". OTP will be valid only for 5 minutes", "Nala Resort - Cancellation OTP", rs.getString(2));
							sd.send();
							PreparedStatement ps1 = Database.getStmt("insert into otp_datas values(?, ?, now())");
							ps1.setString(1, bookingReferenceID);
							ps1.setString(2, OTP);
							ps1.executeUpdate();
							mp.put("code", "1");
							mp.put("message", "OTP has sent to your mail");
						} else {
							throw new Exception("Last date for your cancellation has been ended");
						}
					} else {
						throw new Exception("Please enter the mail ID which you entered while booking");
					}
				} else {
					throw new Exception("Booking Reference ID is invalid");
				}
				out.println(new Gson().toJson(mp));
				out.flush();
				out.close();
			} catch(Exception e) {
				System.out.println(e);
				mp.put("code", "0");
				mp.put("message", e.getMessage());
				out.println(new Gson().toJson(mp));
				out.flush();
				out.close();
			}
		}
	}

}
