package com.kce.library.admin;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class EJournals
 */
@WebServlet("/EJournals")
public class EJournals extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EJournals() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			String department = request.getParameter("department");
			String webAddress = request.getParameter("webaddress");
			Map<String, String> li = new TreeMap<String, String>();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				Statement st = con.createStatement();
				ResultSet rs = null;
				rs = st.executeQuery("select * from ejournals where department = '"+department+"'");
				if(rs.next()) {
					st.executeUpdate("update ejournals set webaddress ='"+webAddress+"' where department = '"+department+"'");
				} else {
					st.executeUpdate("insert into ejournals values('"+department+"', '"+webAddress+"')");
				}
				li.put("code", "1");
				li.put("message", "Updated Succesfully");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				li.put("code", "0");
				li.put("message", e.toString());
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
