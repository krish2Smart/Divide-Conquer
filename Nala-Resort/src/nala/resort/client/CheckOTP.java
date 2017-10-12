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
 * Servlet implementation class CheckOTP
 */
@WebServlet("/CheckOTP")
public class CheckOTP extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckOTP() {
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
			String OTP = request.getParameter("otp");
			Map<String, String> mp = new TreeMap<String, String>();
			try {
				PreparedStatement ps = Database.getStmt("select reference_id from otp_datas where otp = ?");
				ps.setString(1, OTP);
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					PreparedStatement ps1 = Database.getStmt("delete from otp_datas where reference_id = ?");
					ps1.setString(1, rs.getString(1));
					ps1.executeUpdate();
					ps1 = Database.getStmt("select person_name, phone_no, mail_id, amount_paid, price from occupancy_details where reference_id = ?");
					ps1.setString(1, rs.getString(1));
					ResultSet rs1 = ps1.executeQuery();
					if(rs1.next()) {
						SendMail sd = new SendMail("Hi "+rs1.getString(1)+", we have cancelled your stay as you requested. Our customer support will contact you for refund of advance payment. For any queries, please contact our customer support team.", "Nala Resort - Stay Cancelled", rs1.getString(3));
						sd.send();
						sd = new SendMail("Hi our customer,"+rs1.getString(1)+" who booked their stay has cancelled as they requested. As our duty to contact them and ask the bank details to refund their advance payment.Advance amount paid is "+rs1.getString(4)+".Contact Number : "+rs1.getString(2), "Stay Cancelled", "nala.customercare@gmail.com");
						sd.send();
					}
					ps1 = Database.getStmt("delete from occupancy_details where reference_id = ?");
					ps1.setString(1, rs.getString(1));
					ps1.executeUpdate();
					mp.put("code", "1");
					mp.put("message", "Your Stay has been cancelled.Please check your mail for refund");
				} else {
					throw new Exception("OTP is invalid");
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
