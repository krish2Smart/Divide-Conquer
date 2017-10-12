package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class NalaResort
 */
@WebServlet(
		urlPatterns = { "/NalaResort" }, 
		initParams = { 
				@WebInitParam(name = "link", value = "default")
		})
public class NalaResort extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NalaResort() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String link = request.getParameter("link");
		try(PrintWriter out = response.getWriter()) {
			out.println("<!DOCTYPE html>");
			out.println("<html>");
			out.println("<head>");
				if(link.equals("Home")) {
					out.println("<title>Nala Resort | Home</title>");
					out.println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/home.css\">");
					out.println("<script type = \"text/javascript\" src = \"Javascript/home.js\"></script>");					
				} else if(link.equals("Bookings")) {
					out.println("<title>Nala Resort | Bookings</title>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/bookings.css\">");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/calendar.css\">");
					out.println("<script type = \"text/javascript\" src = \"Javascript/bookings.js\"></script>");
				} else if(link.equals("Bookings/Status")) {
					out.println("<title>Nala Resort | Booking Status</title>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/bookingstatus.css\">");
					out.println("<script type = \"text/javascript\" src = \"Javascript/bookings.js\"></script>");
				} else if(link.equals("Cancellations")) {
					out.println("<title>Nala Resort | Cancellations</title>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/cancellations.css\">");
					out.println("<script type = \"text/javascript\" src = \"Javascript/cancellations.js\"></script>");
				} else if(link.equals("Management")) {
					out.println("<title>Nala Resort | Management</title>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/management.css\">");
					out.println("<script type = \"text/javascript\" src = \"Javascript/management.js\"></script>");
				} else if(link.equals("Management/Stay-Details")) {
					out.println("<title>Nala Resort | Management Stay Details</title>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/staydetails.css\">");
					out.println("<script type = \"text/javascript\" src = \"Javascript/management.js\"></script>");
				}
				out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/nalaresort.css\">");
				out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/footer.css\">");
				out.println("<script type = \"text/javascript\" src = \"Javascript/nalaresort.js\"></script>");
			out.println("</head>");
			out.println("<body>");
				request.getRequestDispatcher("header.html").include(request, response);
				out.println("<div class = \"border-top\"></div>");
				if(link.equals("Home")) {
					request.getRequestDispatcher("home.html").include(request, response);
				} else if(link.equals("Bookings")) {
					request.getRequestDispatcher("bookings.html").include(request, response);
				} else if(link.equals("Bookings/Status")){
					request.getRequestDispatcher("bookingstatus.html").include(request, response);
				}  else if(link.equals("Cancellations")){
					request.getRequestDispatcher("cancellations.html").include(request, response);
				} else if(link.equals("Management")) {
					request.getRequestDispatcher("management.html").include(request, response);
				} else if(link.equals("Management/Stay-Details")) {
					request.getRequestDispatcher("staydetails.html").include(request, response);
				}
				request.getRequestDispatcher("footer.html").include(request, response);
			out.println("</body>");
			out.println("</html>");
		}	
	}

}
