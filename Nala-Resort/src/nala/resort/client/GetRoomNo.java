package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetRoomNo
 */

@WebServlet("/GetRoomNo")
public class GetRoomNo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetRoomNo() {
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
				SimpleDateFormat dateFormat = new SimpleDateFormat("EEE MMM dd yyyy");
				String floorNo = request.getParameter("floor-no");
				String roomType = request.getParameter("room-type");
				Date checkIn = new Date(dateFormat.parse(request.getParameter("check-in")).getTime());
				Date checkOut = new Date(dateFormat.parse(request.getParameter("check-out")).getTime());
				PreparedStatement ps = Database.getStmt("select room_no from room_details where floor_no = ? and room_type = ?");
				ps.setString(1, floorNo);
				ps.setString(2, roomType);
				ResultSet rs = ps.executeQuery();
				rs = ps.executeQuery();
				Set<Integer> list = new LinkedHashSet<Integer>();
				while(rs.next()) {
					list.add(rs.getInt(1));
				}
				ps = Database.getStmt("select room_no from occupancy_details where (? >= check_in and ? <= check_out) or (? >= check_in and ? <= check_out) or (? < check_in and ? > check_out)");
				ps.setDate(1, checkIn);
				ps.setDate(2, checkIn);
				ps.setDate(3, checkOut);
				ps.setDate(4, checkOut);
				ps.setDate(5, checkIn);
				ps.setDate(6, checkOut);
				rs = ps.executeQuery();
				while(rs.next()) {
					if(list.contains(rs.getInt(1))) {
						list.remove(rs.getInt(1));
					}
				}
				out.println(new Gson().toJson(list));
				out.flush();
				out.close();
			} catch(Exception e) {
				Set<String> list = new LinkedHashSet<String>();
				list.add("error");
				out.println(new Gson().toJson(list));
				out.flush();
				out.close();
			}
		}
	}

}
