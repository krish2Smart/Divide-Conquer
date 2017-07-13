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
 * Servlet implementation class DownloadsForms
 */
@WebServlet("/DownloadsForms")
public class DownloadsForms extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DownloadsForms() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			String formName = request.getParameter("formname");
			String working = request.getParameter("working");
			String fileName = request.getParameter("filename");
			if(fileName.contains("C:\\fakepath\\")) {
				fileName = fileName.replace("C:\\fakepath\\", "");
			}
			Map<String, String> li = new TreeMap<String, String>();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
				Statement st = con.createStatement();
				ResultSet rs = null;
				rs = st.executeQuery("select form_name from downloads_form where form_name='"+formName+"'");
				if(rs.next()) {
					st.executeUpdate("update downloads_form set sta_stu = '"+working+"' where form_name='"+formName+"'");
				} else {
					st.executeUpdate("insert into downloads_form values('"+formName+"', '"+working+"', '"+fileName+"')");
				}
				rs = st.executeQuery("select file_name from downloads_form where form_name='"+formName+"'");
				li.put("path", "Downloads/Forms");
				if(rs.next()){
					li.put("filename", rs.getString(1));
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				li.put("path", "0");
				li.put("filename", e.toString());
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
