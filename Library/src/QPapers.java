

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.LinkedList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.kce.library.users.QPaperslist;

/**
 * Servlet implementation class QPapers
 */
@WebServlet("/QPapers")
public class QPapers extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public QPapers() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		DbConnection connection = new DbConnection();
		Connection connector = connection.connect();
		ResultSet setContent=null;
		LinkedList<QPaperslist> list = new LinkedList<QPaperslist>();
		Gson gson = new Gson();
		response.setContentType("application/json");
		try
		{
			PrintWriter respond = response.getWriter();
			Statement stmnt = connector.createStatement();
			setContent = stmnt.executeQuery("select * from qpapers;");
			while(setContent.next())
			{

				QPaperslist qpaperslist = new QPaperslist();
				qpaperslist.setDepart(setContent.getString(1));
				qpaperslist.setDegree(setContent.getString(2));
				list.add(qpaperslist);
			}
			respond.println(gson.toJson(list));
		}
		catch(Exception ex)
		{
			System.out.println(ex);
		}
	}

}
