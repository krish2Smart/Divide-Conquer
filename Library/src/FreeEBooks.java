

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
 * Servlet implementation class FreeEBooks
 */
@WebServlet("/FreeEBooks")
public class FreeEBooks extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FreeEBooks() {
        super();
        // TODO Auto-generated constructor stub
    }
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
			ResultSet setContent = stmnt.executeQuery("select * from free_e_books;");
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
