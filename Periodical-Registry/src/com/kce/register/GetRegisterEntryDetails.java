package com.kce.register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.LinkedList;
import java.util.List;
import com.kce.register.Tables.RegisterEntryTbl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetRegisterEntryDetails
 */
@WebServlet("/GetRegisterEntryDetails")
public class GetRegisterEntryDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetRegisterEntryDetails() {
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
			String id = request.getParameter("id");
			try {
				PreparedStatement ps = Database.getStmt("select * from register_entry_"+id+"");
				ResultSet rs = ps.executeQuery();
				List<RegisterEntryTbl> li = new LinkedList<RegisterEntryTbl>();
				while(rs.next()) {
					li.add(new RegisterEntryTbl(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), new SimpleDateFormat("dd-MM-yyyy").format(rs.getDate(5))));
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch (Exception e) {
				List<String> li = new LinkedList<String>();
				li.add("error");
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}

}
