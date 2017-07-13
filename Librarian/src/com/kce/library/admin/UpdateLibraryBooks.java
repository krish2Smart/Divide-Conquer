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
 * Servlet implementation class UpdateLibraryBooks
 */
@WebServlet("/UpdateLibraryBooks")
public class UpdateLibraryBooks extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateLibraryBooks() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			response.setContentType("application/json");
			String bookName = request.getParameter("bookname");
			String volumes = request.getParameter("volumes");
			String titles = request.getParameter("titles");
			String id = request.getParameter("id");
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf","root","");
				Statement st = con.createStatement();
				ResultSet rs = null;
				rs = st.executeQuery("select * from "+id+"_table");
				int flag = 0;
				while(rs.next()) {
					if(bookName.equals(rs.getString(1))) {
						flag = 1;
					}
				}
				if(flag == 1) {
					st.executeUpdate("update "+id+"_table set volumes = "+volumes+", titles = "+titles+" where book_name = '"+bookName+"'");
				} else { 
					st.executeUpdate("insert into "+id+"_table values('"+bookName+"', "+volumes+", "+titles+")");
				}
				Map<String, String> li = new TreeMap<String, String>();
				li.put("code", "1");
				li.put("message", "Book detail is updated succesfully");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				Map<String, String> li = new TreeMap<String, String>();
				li.put("code", "0");
				li.put("message", e.toString());
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
