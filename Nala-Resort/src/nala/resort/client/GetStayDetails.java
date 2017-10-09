package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
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
 * Servlet implementation class GetStayDetails
 */
@WebServlet("/GetStayDetails")
public class GetStayDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetStayDetails() {
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
				PreparedStatement ps = Database.getStmt("select id, person_name, aadhar_no, check_in, check_out, phone_no, mail_id, room_no, dry_cleaning, laundry_facilities, free_newspapers, amount_paid, price, reference_id, booked_at from occupancy_details where curdate() >= check_in and curdate() <= check_out");
				ResultSet rs = ps.executeQuery();
				LinkedList<OccupancyDetailsTbl> list = new LinkedList<OccupancyDetailsTbl>();
				while(rs.next()) {
					list.add(new OccupancyDetailsTbl(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getDate(4), rs.getDate(5), rs.getString(6), rs.getString(7), rs.getInt(8), rs.getBoolean(9), rs.getBoolean(10), rs.getBoolean(11), rs.getFloat(12), rs.getFloat(13), rs.getString(14), rs.getDate(15)));
				}
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
