

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

/**
 * Servlet implementation class FreeEJous
 */
@WebServlet("/FreeEJous")
public class FreeEJous extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FreeEJous() {
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
		LinkedList<String> list = new LinkedList<String>();
		Gson gson = new Gson();
		response.setContentType("application/json");
		try
		{
			PrintWriter respond = response.getWriter();
			Statement stmnt = connector.createStatement();
			ResultSet setContent = stmnt.executeQuery("select * from free_e_journals;");
			while(setContent.next())
			{
				Col_TableContent tbcontent = new Col_TableContent();
				list.add(setContent.getString(1));
			}
			respond.println(gson.toJson(list));
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}

}
