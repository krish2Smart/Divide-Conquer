package com.kce.library.admin;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AdminPage
 */
@WebServlet(
		urlPatterns = { "/AdminPage" }, 
		initParams = { 
				@WebInitParam(name = "option", value = "default")
		})
public class AdminPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdminPage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String option = request.getParameter("option");
		try(PrintWriter out = response.getWriter()) {
			out.println("<!DOCTYPE html>");
			out.println("<html>");
			out.println("<head>");
				out.println("<meta charset='ISO-8859-1'>");
				out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/adminpagestyling.css\">");
				out.println("<script type=\"text/javascript\" src=\"Javascript/adminpage.js\"></script>");
				if(option.equals("Feedbacks")) {		
					out.println("<title>Feedbacks | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/feedbacknotifications.css\">");
				} else if(option.equals("Collections")) {
					out.println("<title>Collections | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/collections.css\">");
				} else if(option.equals("Collections/NewArrival")) {
					out.println("<title>Collections New Arrival | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/collectionsnewarrival.css\">");
				} else if(option.equals("Collections/Image")) {
					out.println("<title>Collections Image | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/collectionsimage.css\">");
				} else if(option.equals("Collections/CDTable")) {
					out.println("<title>Collections CDTable | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/collectionscdtable.css\">");
				} else if(option.equals("Journals")) {
					out.println("<title>Journals | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/journals.css\">");
				} else if(option.equals("Journals/NewArrival")) {
					out.println("<title>Journals New Arrival | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/journalsnewarrival.css\">");
				} else if(option.equals("Journals/CDTable")) {
					out.println("<title>Journals CDTable | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/journalscdtable.css\">");
				} else if(option.equals("Magazines")) {
					out.println("<title>Magazines | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/magazines.css\">");
				} else if(option.equals("Magazines/NewArrival")) {
					out.println("<title>Magazines New Arrival | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/magazinesnewarrival.css\">");
				} else if(option.equals("Magazines/CDTable")) {
					out.println("<title>Magazines CDTable | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/magazinescdtable.css\">");
				} else if(option.equals("E-Journals")) {
					out.println("<title>E-Journals | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/ejournals.css\">");
				} else if(option.equals("MBALibrary")) {
					out.println("<title>MBA Library | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mbalibrary.css\">");
				} else if(option.equals("MBALibrary/NewArrival")) {
					out.println("<title>MBA Library New Arrival | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mbalibrarynewarrival.css\">");
				} else if(option.equals("MBALibrary/Books")) {
					out.println("<title>MBA Library/Books | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mbalibrarybooks.css\">");
				} else if(option.equals("MBALibrary/Journals Subscribed")) {
					out.println("<title>MBA Library/Journals Subscribed | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mbalibraryjournalssubscribed.css\">");
				}  else if(option.equals("MBALibrary/Magazines Subscribed")) {
					out.println("<title>MBA Library/Magazines Subscribed | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mbalibrarymagazinessubscribed.css\">");
				} else if(option.equals("MCALibrary")) {
					out.println("<title>MCA Library | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mcalibrary.css\">");
				} else if(option.equals("MCALibrary/NewArrival")) {
					out.println("<title>MCA Library New Arrival | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mcalibrarynewarrival.css\">");
				} else if(option.equals("MCALibrary/Books")) {
					out.println("<title>MCA Library/Books | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mcalibrarybooks.css\">");
				} else if(option.equals("MCALibrary/Journals Subscribed")) {
					out.println("<title>MCA Library/Journals Subscribed | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mcalibraryjournalssubscribed.css\">");
				}  else if(option.equals("MCALibrary/Magazines Subscribed")) {
					out.println("<title>MCA Library/Magazines Subscribed | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/mcalibrarymagazinessubscribed.css\">");
				} else if(option.equals("Downloads")) {
					out.println("<title>Downloads | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/downloads.css\">");
				} else if(option.equals("Downloads/Papers")) {
					out.println("<title>Downloads/Papers | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/downloadspapers.css\">");
				} else if(option.equals("Downloads/Forms")) {
					out.println("<title>Downloads/Forms | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/downloadsforms.css\">");
				} else if(option.equals("Q.Papers")) {
					out.println("<title>Q.Papers | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/qpapers.css\">");
				} else if(option.equals("Settings")) {
					out.println("<title>Settings | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/settings.css\">");
				} else if(option.equals("Free-E-Resources")) {
					out.println("<title>Free E-Resources | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/freeeresources.css\">");
				} else if(option.equals("Free-E-Resources/Free-E-Books")) {
					out.println("<title>Free E-Resources/Free E-Books | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/freeebooks.css\">");
				} else if(option.equals("Free-E-Resources/Free-E-Journals")) {
					out.println("<title>Free E-Resources/Free E-Journals | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/freeejournals.css\">");
				} else if(option.equals("Free-E-Resources/Free-Newspapers")) {
					out.println("<title>Free E-Resources/Free Newspapers | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/freenewspapers.css\">");
				} else if(option.equals("change-username")) {
					out.println("<title>Change username | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/changeusername.css\">");
				} else if(option.equals("change-password")) {
					out.println("<title>Change Password | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/changepassword.css\">");
				} else if(option.equals("add-department")) {
					out.println("<title>Add Department | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/adddepartment.css\">");
				} else if(option.equals("delete-department")) {
					out.println("<title>Delete Department | Librarian</title>");
					out.println("<link type=\"text/css\" rel=\"stylesheet\" href=\"CSS/deletedepartment.css\">");
				}
			out.println("</head>");
			out.println("<body>");
				request.getRequestDispatcher("adminnavbar.html").include(request, response);
				if(option.equals("Feedbacks")) {
					out.println("<div id=\"shownotifications\"></div>");
				} else if(option.equals("Collections")) {
					out.println("<div id=\"collections\">");
						out.println("<div class=\"title\">Collections</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<ul>");
							out.println("<li><input type=\"button\" value=\"New Arrival\" id=\"collections-newarrival-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Image\" id=\"collections-image-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"CD Table\" id=\"collections-cdtable-btn\" class=\"btn\"></li>");
						out.println("</ul>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Collections/NewArrival")) {
					out.println("<div id=\"collections-newarrival\">");
						out.println("<div class=\"title\">Collections-New Arrival</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"collections-newarrival-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"collections-newarrival-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Collections/Image")) {
					out.println("<div id=\"collections-image\">");
						out.println("<div class=\"title\">Collections-Image</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"collections-image-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"collections-image-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Collections/CDTable")) {
					out.println("<div id=\"collections-cdtable\">");
						out.println("<div class=\"title\">Collections-CD Table</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<div class=\"content-holder\">");
							out.println("<select id=\"collections-cdtable-degree\" class=\"cd-form\">");
								out.println("<option selected disabled>Degree</option>");
								out.println("<option value = \"B.E\">B.E/B.Tech</option>");
								out.println("<option>M.E</option>");
								out.println("<option>MBA</option>");							
								out.println("<option>MCA</option>");
								out.println("<option>SCIENCE & HUMANITIES</option>");
								out.println("<option>GENERAL</option>");
								out.println("<option>TOTAL</option>");
								out.println("<option>OVERALL TOTAL</option>");
							out.println("</select>");
							out.println("<select id=\"collections-cdtable-department\" class=\"cd-form\"></select>");
							out.println("<input type=\"file\" id=\"collections-cdtable-value\" class=\"cd-form\"/>");
							out.println("<input type=\"text\" id=\"collections-cdtable-numofcds\" placeholder=\"No. of CD's\" class=\"cd-form\"/>");
							out.println("<div id='error-message'></div>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"collections-cdtable-upld\" class=\"cd-form\"/>");
						out.println("</div>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Journals")) {
					out.println("<div id=\"journals\">");
						out.println("<div class=\"title\">Journals</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<ul>");
							out.println("<li><input type=\"button\" value=\"New Arrival\" id=\"journals-newarrival-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Journals Details\" id=\"journals-cdtable-btn\" class=\"btn\"></li>");
						out.println("</ul>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Journals/NewArrival")) {
					out.println("<div id=\"journals-newarrival\">");
						out.println("<div class=\"title\">Journals-New Arrival</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"journals-newarrival-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"journals-newarrival-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Journals/CDTable")) {
					out.println("<div id=\"journals-cdtable\">");
					out.println("<div class=\"title\">Journals-Details</div>");
					out.println("<div class=\"border\"></div>");
						out.println("<div class=\"content-holder\">");
							out.println("<select id=\"journals-cdtable-region\" class=\"cd-form\">");
								out.println("<option selected disabled>Region</option>");
								out.println("<option>NATIONAL</option>");
								out.println("<option>INTERNATIONAL</option>");
							out.println("</select>");
							out.println("<select id=\"journals-cdtable-degree\" class=\"cd-form\">");
								out.println("<option selected disabled>Degree</option>");
								out.println("<option value = \"B.E\">B.E/B.Tech</option>");
								out.println("<option>M.E</option>");
								out.println("<option>MBA</option>");							
								out.println("<option>MCA</option>");
								out.println("<option>SCIENCE & HUMANITIES</option>");
								out.println("<option>GENERAL</option>");
								out.println("<option>TOTAL</option>");
								out.println("<option>OVERALL TOTAL</option>");
							out.println("</select>");
							out.println("<select id=\"journals-cdtable-department\" class=\"cd-form\"></select>");
							out.println("<input type=\"file\" id=\"journals-cdtable-value\" class=\"cd-form\"/>");
							out.println("<input type=\"text\" id=\"journals-cdtable-numofcds\" placeholder=\"No. of journals\" class=\"cd-form\"/>");
							out.println("<div id='error-message'></div>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"journals-cdtable-upld\" class=\"cd-form\"/>");
						out.println("</div>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Magazines")) {
					out.println("<div id=\"magazines\">");
						out.println("<div class=\"title\">Magazines</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<ul>");
							out.println("<li><input type=\"button\" value=\"New Arrival\" id=\"magazines-newarrival-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Magazines-Details\" id=\"magazines-cdtable-btn\" class=\"btn\"></li>");
						out.println("</ul>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Magazines/NewArrival")) {
					out.println("<div id=\"magazines-newarrival\">");
						out.println("<div class=\"title\">Magazines-New Arrival</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"magazines-newarrival-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"magazines-newarrival-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Magazines/CDTable")) {
					out.println("<div id=\"magazines-cdtable\">");
						out.println("<div class=\"title\">Magazines-Details</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<div class=\"content-holder\">");
							out.println("<select id=\"magazines-cdtable-region\" class=\"cd-form\">");
								out.println("<option selected disabled>Region</option>");
								out.println("<option>NATIONAL</option>");
								out.println("<option>INTERNATIONAL</option>");
							out.println("</select>");
							out.println("<select id=\"magazines-cdtable-degree\" class=\"cd-form\">");
								out.println("<option selected disabled>Degree</option>");
								out.println("<option value = \"B.E\">B.E/B.Tech</option>");
								out.println("<option>M.E</option>");
								out.println("<option>MBA</option>");							
								out.println("<option>MCA</option>");
								out.println("<option>SCIENCE & HUMANITIES</option>");
								out.println("<option>GENERAL</option>");
								out.println("<option>TOTAL</option>");
								out.println("<option>OVERALL TOTAL</option>");
							out.println("</select>");
							out.println("<select id=\"magazines-cdtable-department\" class=\"cd-form\"></select>");
							out.println("<input type=\"file\" id=\"magazines-cdtable-value\" class=\"cd-form\"/>");
							out.println("<input type=\"text\" id=\"magazines-cdtable-numofcds\" placeholder=\"No. of magazines\" class=\"cd-form\"/>");
							out.println("<div id='error-message'></div>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"magazines-cdtable-upld\" class=\"cd-form\"/>");
						out.println("</div>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("E-Journals")) {
					out.println("<div id=\"e-journals\">");
						out.println("<div class=\"title\">E-Journals</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<div id=\"content-holder\">");
							out.println("<input type=\"text\" id=\"e-journals-department\" placeholder=\"Department\" class=\"cd-form\"/>");
							out.println("<input type=\"text\" id=\"e-journals-webaddress\" placeholder=\"Web Address\" class=\"cd-form\"/>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"e-journals-upld\" class=\"cd-form\"/>");
							out.println("</div>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MBALibrary")) {
					out.println("<div id=\"mba-library\">");
						out.println("<div class=\"title\">MBA Library</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<ul>");
							out.println("<li><input type=\"button\" value=\"New Arrival\" id=\"mba-library-newarrival-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Books\" id=\"mba-library-books-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Journals Subscribed\" id=\"mba-library-journalssubscribed-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Magazines Subscribed\" id=\"mba-library-magazinessubscribed-btn\" class=\"btn\"></li>");
						out.println("</ul>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MBALibrary/NewArrival")) {
					out.println("<div id=\"mba-library-newarrival\">");
						out.println("<div class=\"title\">MBALibrary-New Arrival</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"mba-library-newarrival-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mba-library-newarrival-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MBALibrary/Books")) { 
					out.println("<div id=\"mba-library-books\" >");
						out.println("<div class=\"title\">MBALibrary-Books</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"text\" id=\"mba-library-bookname\" placeholder=\"Enter the book name\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"mba-library-volumes\" placeholder=\"Enter no. of volumes\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"mba-library-titles\" placeholder=\"Enter no. of titles\" class=\"textbox\" />");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mba-library-books-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MBALibrary/Journals Subscribed")) {
					out.println("<div id=\"mba-library-journalssubscribed\">");
						out.println("<div class=\"title\">MBALibrary-Journals Subscribed</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"mba-library-journalssubscribed-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mba-library-journalssubscribed-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MBALibrary/Magazines Subscribed")) {
					out.println("<div id=\"mba-library-magazinessubscribed\">");
						out.println("<div class=\"title\">MBALibrary-Magazines Subscribed</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"mba-library-magazinessubscribed-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mba-library-magazinessubscribed-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MCALibrary")) {
					out.println("<div id=\"mca-library\">");
					out.println("<div class=\"title\">MCA Library</div>");
					out.println("<div class=\"border\"></div>");
					out.println("<ul>");
						out.println("<li><input type=\"button\" value=\"New Arrival\" id=\"mca-library-newarrival-btn\" class=\"btn\"></li>");
						out.println("<li><input type=\"button\" value=\"Books\" id=\"mca-library-books-btn\" class=\"btn\"></li>");
						out.println("<li><input type=\"button\" value=\"Journals Subscribed\" id=\"mca-library-journalssubscribed-btn\" class=\"btn\"></li>");
						out.println("<li><input type=\"button\" value=\"Magazines Subscribed\" id=\"mca-library-magazinessubscribed-btn\" class=\"btn\"></li>");
					out.println("</ul>");
					out.println("<div class=\"border\"></div>");
				out.println("</div>");
				} else if(option.equals("MCALibrary/NewArrival")) {
					out.println("<div id=\"mca-library-newarrival\">");
						out.println("<div class=\"title\">MCALibrary-New Arrival</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"mca-library-newarrival-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mca-library-newarrival-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MCALibrary/Books")) { 
					out.println("<div id=\"mca-library-books\" >");
						out.println("<div class=\"title\">MCALibrary-Books</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"text\" id=\"mca-library-bookname\" placeholder=\"Enter the book name\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"mca-library-volumes\" placeholder=\"Enter no. of volumes\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"mca-library-titles\" placeholder=\"Enter no. of titles\" class=\"textbox\" />");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mca-library-books-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MCALibrary/Journals Subscribed")) {
					out.println("<div id=\"mca-library-journalssubscribed\">");
						out.println("<div class=\"title\">MCALibrary-Journals Subscribed</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"mca-library-journalssubscribed-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mca-library-journalssubscribed-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("MCALibrary/Magazines Subscribed")) {
					out.println("<div id=\"mca-library-magazinessubscribed\">");
						out.println("<div class=\"title\">MCALibrary-Magazines Subscribed</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"file\" id=\"mca-library-magazinessubscribed-value\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"mca-library-magazinessubscribed-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Downloads")) {
					out.println("<div id=\"downloads\">");
						out.println("<div class=\"title\">Downloads</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"button\" value=\"Faculty Paper Publication\" id=\"downloads-papers-btn\" class=\"btn\">");
						out.println("<input type=\"button\" value=\"Forms\" id=\"downloads-forms-btn\" class=\"btn\">");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Downloads/Papers")) { 
					out.println("<div id=\"downloads-papers\" >");
						out.println("<div class=\"title\">Downloads-Papers</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"text\" id=\"downloads-papers-staffname\" placeholder=\"Enter the staff name\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"downloads-papers-department\" placeholder=\"Enter the dept\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"downloads-papers-paper\" placeholder=\"Enter name of the paper\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"downloads-papers-journal\" placeholder=\"Enter the journal name\" class=\"textbox\" />");
						out.println("<input type=\"file\" id=\"downloads-papers-file\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"downloads-papers-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Downloads/Forms")) { 
					out.println("<div id=\"downloads-forms\" >");
						out.println("<div class=\"title\">Downloads-Forms</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"text\" id=\"downloads-forms-formname\" placeholder=\"Enter the form name\" class=\"textbox\" />");
						out.println("<input type=\"text\" id=\"downloads-forms-working\" placeholder=\"Staff/Student\" class=\"textbox\" />");
						out.println("<input type=\"file\" id=\"downloads-forms-file\"/>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Upload\" id=\"downloads-forms-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Free-E-Resources")) {
					out.println("<div id=\"free-e-resources\">");
						out.println("<div class=\"title\">Free E-Resources</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<ul>");
							out.println("<li><input type=\"button\" value=\"Free E-books\" id=\"free-e-books-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Free E-Journals\" id=\"free-e-journals-btn\" class=\"btn\"></li>");
							out.println("<li><input type=\"button\" value=\"Free Newspapers\" id=\"free-newspapers-btn\" class=\"btn\"></li>");
						out.println("</ul>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Free-E-Resources/Free-E-Books")) {
					out.println("<div id=\"free-e-books\">");
						out.println("<div class=\"title\">Free E-Books</div>");
						out.println("<div class=\"border\"></div>");
							out.println("<input type=\"text\" id=\"free-e-books-link\" placeholder=\"Enter the link\" class=\"textbox\" />");
							out.println("<div id='error-message'></div>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"free-e-books-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Free-E-Resources/Free-E-Journals")) {
					out.println("<div id=\"free-e-journals\">");
						out.println("<div class=\"title\">Free E-Journals</div>");
						out.println("<div class=\"border\"></div>");
							out.println("<input type=\"text\" id=\"free-e-journals-link\" placeholder=\"Enter the link\" class=\"textbox\" />");
							out.println("<div id='error-message'></div>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"free-e-journals-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Free-E-Resources/Free-Newspapers")) {
					out.println("<div id=\"free-newspapers\">");
						out.println("<div class=\"title\">Free Newspapers</div>");
						out.println("<div class=\"border\"></div>");
							out.println("<input type=\"text\" id=\"free-newspapers-link\" placeholder=\"Enter the link\" class=\"textbox\" />");
							out.println("<div id='error-message'></div>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"free-newspapers-upld\"/>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("Q.Papers")) {
					out.println("<div id=\"qpapers\">");
					out.println("<div class=\"title\">Q.Papers</div>");
					out.println("<div class=\"border\"></div>");
						out.println("<div class=\"content-holder\">");
							out.println("<select id=\"qpapers-category\" class=\"cd-form\">");
								out.println("<option selected disabled>Category</option>");
								out.println("<option>QPapers</option>");
								out.println("<option>Syllabus</option>");
							out.println("</select>");
							out.println("<select id=\"qpapers-degree\" class=\"cd-form\">");
								out.println("<option selected disabled>Degree</option>");
								out.println("<option value = \"B.E\">B.E/B.Tech</option>");
								out.println("<option>M.E</option>");
								out.println("<option>MBA</option>");							
								out.println("<option>MCA</option>");
								out.println("<option>SCIENCE & HUMANITIES</option>");
							out.println("</select>");
							out.println("<select id=\"qpapers-department\" class=\"cd-form\"></select>");
							out.println("<select id=\"qpapers-year\" class=\"cd-form\"></select>");
							out.println("<select id=\"qpapers-semester\" class=\"cd-form\"></select>");
							out.println("<input type=\"file\" id=\"qpapers-value\" class=\"cd-form\"/>");
							out.println("<div id='error-message'></div>");
							out.println("<input type=\"button\" value=\"Upload\" id=\"qpapers-upld\" class=\"cd-form\"/>");
						out.println("</div>");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				}  else if(option.equals("Settings")) {
						out.println("<div id=\"settings\">");
							out.println("<div class=\"title\">Settings</div>");
							out.println("<div class=\"border\"></div>");
							out.println("<ul>");
								out.println("<li><input type=\"button\" value=\"Change Username\" id=\"changeuser-btn\" class=\"btn\"></li>");
								out.println("<li><input type=\"button\" value=\"Change Password\" id=\"changepass-btn\" class=\"btn\"></li>");
								out.println("<li><input type=\"button\" value=\"Add Department\" id=\"add-department-btn\" class=\"btn\"></li>");
								out.println("<li><input type=\"button\" value=\"Delete Department\" id=\"delete-department-btn\" class=\"btn\"></li>");
							out.println("</ul>");
							out.println("<div class=\"border\"></div>");
						out.println("</div>");
				} else if(option.equals("change-username")) {
					out.println("<div id=\"change-username\">");
						out.println("<div class=\"title\">Change Username</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"text\" placeholder=\"Enter new username\" id=\"username\" class=\"textbox\">");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Change username\" id=\"username-sub\">");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("change-password")) {
					out.println("<div id=\"change-password\">");
						out.println("<div class=\"title\">Change Password</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<input type=\"text\" placeholder=\"Enter new password\" id=\"password\" class=\"textbox\">");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Change password\" id=\"password-sub\">");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("add-department")) {
					out.println("<div id=\"add-department\">");
						out.println("<div class=\"title\">Add Department</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<select id=\"add-department-degree\">");
							out.println("<option selected disabled>Degree</option>");
							out.println("<option value = \"B.E\">B.E/B.Tech</option>");
							out.println("<option>M.E</option>");
						out.println("</select>");	
						out.println("<input type=\"text\" placeholder=\"Enter the department name\" id=\"department\" class=\"textbox\">");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Add Department\" id=\"add-department-sub\">");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				} else if(option.equals("delete-department")) {
					out.println("<div id=\"delete-department\">");
						out.println("<div class=\"title\">Delete Department</div>");
						out.println("<div class=\"border\"></div>");
						out.println("<select id=\"del-degree\">");
							out.println("<option selected disabled>Degree</option>");
							out.println("<option value = \"B.E\">B.E/B.Tech</option>");
							out.println("<option>M.E</option>");
						out.println("</select>");	
						out.println("<select id=\"del-department\" class=\"cd-form\"></select>");
						out.println("<div id='error-message'></div>");
						out.println("<input type=\"button\" value=\"Delete Department\" id=\"delete-department-sub\">");
						out.println("<div class=\"border\"></div>");
					out.println("</div>");
				}
				out.println("<div id=\"navbar-set\"><input type=\"button\" value=\"Settings\" id=\"settings-btn\"><input type=\"button\" value=\"Logout\" id=\"logout-btn\"></div>");
			out.println("</body>");
			out.println("</html>");
		}
	}
}
