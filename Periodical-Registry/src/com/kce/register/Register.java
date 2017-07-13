package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Register
 */
@WebServlet("/Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Register() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String option = request.getParameter("option");
		try(PrintWriter out = response.getWriter()) {
			out.println("<html>");
			out.println("<head>");
				out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/register.css\">");
				out.println("<script type = \"text/javascript\" src = \"Javascript/register.js\"></script>");
				if(option.equals("Home")) {
					out.println("<script type = \"text/javascript\" src = \"Javascript/home.js\"></script>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/home.css\">");
					out.println("<title>Home | Periodical Register</title>");
				} else if(option.equals("Create-Register")) {
					out.println("<script type = \"text/javascript\" src = \"Javascript/createregister.js\"></script>");			
					out.println("<title>Create Register | Periodical Register</title>");
				} else if(option.equals("Register-Entry")) {
					out.println("<script type = \"text/javascript\" src = \"Javascript/registerentry.js\"></script>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/registerentry.css\">");
					out.println("<title>Register Entry | Periodical Register</title>");
				} else if(option.equals("Renewal-Dates")) {
					out.println("<script type = \"text/javascript\" src = \"Javascript/renewaldates.js\"></script>");
					out.println("<link type = \"text/css\" rel = \"stylesheet\" href = \"CSS/renewaldates.css\">");
					out.println("<title>Renewal Dates | Periodical Register</title>");
				}
			out.println("</head>");
			out.println("<body>");
			request.getRequestDispatcher("header.html").include(request, response);
			request.getRequestDispatcher("navbar.html").include(request, response);
			out.println("<section>");
			if(option.equals("Home")) {
				out.println("<div id = \"home\">");
					out.println("<div id = \"renewal-dates-remainder\">"
									+ "<div id = \"heading\">Renewal Dates - Remainder</div>"
									+ "<div id = \"renewal-dates-remainder-content-holder\"></div>"
								+ "</div>");
					out.println("<div id = \"register-entry-remainder\">"
									+ "<div id = \"heading\">Register Entry - Remainder</div>"
									+ "<div id = \"register-entry-remainder-content-holder\">"
										+ "<div id = \"remainder-weekly\"></div>"
										+ "<div id = \"remainder-fortnightly\"></div>"
										+ "<div id = \"remainder-monthly\"></div>"
										+ "<div id = \"remainder-bymonthly\"></div>"
										+ "<div id = \"remainder-quarterly\"></div>"
										+ "<div id = \"remainder-byannual\"></div>"
										+ "<div id = \"remainder-annual\"></div>"
									+ "</div>"
								+ "</div>");
				out.println("</div>");
			} else if(option.equals("Create-Register")) {
				out.println("<div id = \"create-register\">");
					out.println("<table>");
						out.println("<tr>");
							out.println("<td><label>Publisher Name</label></td>");
							out.println("<td><input type = \"text\" id = \"create-register-publisher-name\"></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Periodical-Name</label></td>");
							out.println("<td><input type = \"text\" id = \"create-register-periodical-name\"></td>");
						out.println("</tr>");
						out.println("<tr>");
						out.println("<td><label>Periodical-Type</label></td>");
								out.println("<td><select id = \"create-register-periodical-type\">"
										+ "<option>Select</option>"
										+ "<option>Journal</option>"
										+ "<option>Magazine</option>"
										+ "<option>News Letter</option>"
										+ "</select></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Periodicity</label></td>");
							out.println("<td><select id = \"create-register-periodicity\">"
									+ "<option>Select</option>"
									+ "<option>Weekly</option>"
									+ "<option>Fort-Nightly</option>"
									+ "<option>Monthly</option>"
									+ "<option>By-Monthly</option>"
									+ "<option>Quarterly</option>"
									+ "<option>By-Annually</option>"
									+ "<option>Annually</option>"
									+ "</select></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Period</label></td>");
							out.println("<td><label class = \"label-top\">From</label><input type = \"text\" placeholder = \"DD-MM-YYYY\" id = \"create-register-period-from\"></td>");
							out.println("<td><label class = \"label-top\">To</label><input type = \"text\" placeholder = \"DD-MM-YYYY\" id = \"create-register-period-to\"></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Journal-Type</label></td>");
							out.println("<td><select id = \"create-register-journal-type\">"
										+ "<option>Select</option>"
										+ "<option>Foreign</option>"
										+ "<option>Indian</option>"
										+ "<option>Gift</option>"
										+ "</select></td>");
							out.println("</tr>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Department</label></td>");
							out.println("<td><select class = \"department\" id = \"create-register-department\"></select></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Publisher's Address</label></td>");
							out.println("<td><textarea id = \"create-register-publishers-address\"></textarea></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Supplying Agent Address</label></td>");
							out.println("<td><textarea id = \"create-register-supplying-agent-address\"></textarea></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>DD/Cheque</label></td>");
							out.println("<td><label class = \"label-top\">Number</label><input type = \"text\" id = \"create-register-ddorcheque-number\"></td>");
							out.println("<td><label class = \"label-top\">Amount</label><input type = \"text\" id = \"create-register-ddorcheque-amount\"></td>");
							out.println("<td><label class = \"label-top\">Date</label><input type = \"text\" placeholder = \"DD-MM-YYYY\" id = \"create-register-ddorcheque-date\"></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Placement No</label></td>");
							out.println("<td><input type = \"text\" id = \"create-register-placement-no\"></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Subscription No</label></td>");
							out.println("<td><input type = \"text\" id = \"create-register-subscription-no\"></td>");
						out.println("</tr>");
						out.println("<tr>");
						out.println("<td><label>Email Id</label></td>");
						out.println("<td><input type = \"text\" id = \"create-register-email-id\"></td>");
					out.println("</tr>");
					out.println("</table>");
				out.println("</div>");
				out.println("<div id = \"error-message\"></div>");
				out.println("<input type = \"submit\" value = \"Submit\" id = \"create-register-sub\" class = \"submit-btn\">");
			} else if(option.equals("Register-Entry")) {
				out.println("<div id = \"register-entry\">");
					out.println("<table>");
						out.println("<tr>");
							out.println("<td><label>Periodical-Type</label></td>");
							out.println("<td><select id = \"register-entry-periodical-type\">"
									+ "<option>Select</option>"
									+ "<option>Journal</option>"
									+ "<option>Magazine</option>"
									+ "<option>News Letter</option>"
									+ "</select></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Periodical-Name</label></td>");
							out.println("<td><input type = \"text\" id = \"register-entry-periodical-name\" list = \"register-entry-periodical-name-suggestion\"><datalist id = \"register-entry-periodical-name-suggestion\"></datalist></td>");
						out.println("</tr>");
						out.println("<tr>");
							out.println("<td><label>Publisher Name</label></td>");
							out.println("<td><input type = \"text\" id = \"register-entry-publisher-name\" list = \"register-entry-publisher-name-suggestion\"><datalist id = \"register-entry-publisher-name-suggestion\"></datalist></td>");
						out.println("</tr>");
					out.println("</table>");
				out.println("</div>");
				out.println("<div id = \"error-message\"></div>");
				out.println("<input type = \"submit\" value = \"Entry Details\" id = \"register-entry-show\" class = \"submit-btn\">");
				out.println("<div id = \"entry-details-holder\"></div>");
				out.println("<div id = \"entry-details-holder-add\"></div>");
			} else if(option.equals("Renewal-Dates")) { 
				out.println("<input type = \"submit\" id = \"renewal-dates-byperiodicalname-btn\" value = \"Search by Periodical Name\" class = \"selection-btn\">");
				out.println("<input type = \"submit\" id = \"renewal-dates-bymonth-btn\" value = \"Search by Month\" class = \"selection-btn\">");
				out.println("<div id = \"renewal-dates-byperiodicalname\"></div>");
				out.println("<div id = \"renewal-dates-bymonth\"></div>");
			}
			out.println("</section>");
			out.println("<footer>");
			out.println("</footer>");
			out.println("</body>"); 
			out.println("</html>");
			
		}
	}

}
