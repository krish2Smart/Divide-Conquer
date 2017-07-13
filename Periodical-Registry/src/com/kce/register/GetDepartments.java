package com.kce.register;

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
 * Servlet implementation class GetDepartments
 */
@WebServlet("/GetDepartments")
public class GetDepartments extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetDepartments() {
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
			List <String> departments = new LinkedList<String>();
			try {
				PreparedStatement ps = Database.getStmt("select * from departments");
				ResultSet rs = ps.executeQuery();
				while(rs.next()) {
					departments.add(rs.getString(2));
				}
				out.println(new Gson().toJson(departments));
				out.flush();
				out.close();
			} catch(Exception e) {
				System.out.println(e);
			}
		}
	}

}
