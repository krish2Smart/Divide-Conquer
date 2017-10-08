package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class CalculatePrice
 */
@WebServlet("/CalculatePrice")
public class CalculatePrice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CalculatePrice() {
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
				Date checkIn = new Date(dateFormat.parse(request.getParameter("check-in")).getTime());
				Date checkOut = new Date(dateFormat.parse(request.getParameter("check-out")).getTime());
				String roomType = request.getParameter("room-type");
				int oneDay = 24 * 60 * 60 * 1000;
				int numOfDays = (Math.round(checkOut.getTime() - checkIn.getTime()) / oneDay) + 1;
				GetRoomTypeFactory roomTypeFactory = new GetRoomTypeFactory();
				RoomType roomTypeObj = roomTypeFactory.getRoomType(roomType);
				float price = roomTypeObj.calculatePrice(numOfDays);
				List<Float> priceList = new LinkedList<Float>();
				priceList.add(price);
				out.println(new Gson().toJson(priceList));
				out.flush();
				out.close();
			} catch(Exception e) {
				List<String> priceList = new LinkedList<String>();
				priceList.add("error");
				out.println(new Gson().toJson(priceList));
				out.flush();
				out.close();
			}
		}
	}

}
