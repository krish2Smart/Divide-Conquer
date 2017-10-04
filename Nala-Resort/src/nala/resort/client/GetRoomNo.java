package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;

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
			String floorNo = request.getParameter("floor-no");
			String roomType = request.getParameter("room-type");
			try {
				PreparedStatement ps = Database.getStmt("select room_no from room_details where floor_no = ? and room_type = ?");
				ps.setString(1, floorNo);
				ps.setString(2, roomType);
				ResultSet rs = ps.executeQuery();
				List<String> li = new LinkedList<String>();
				while(rs.next()) {
					li.add(rs.getString(1));
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				System.out.println(e);
				List<String> li = new LinkedList<String>();
				li.add("error");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
