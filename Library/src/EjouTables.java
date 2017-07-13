

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
import com.kce.library.users.EjouTableContent;

/**
 * Servlet implementation class EjouTables
 */
@WebServlet("/EjouTables")
public class EjouTables extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EjouTables() {
        super();
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		DbConnection connection = new DbConnection();
		Connection connector = connection.connect();
		ResultSet setContent=null;
		LinkedList<EjouTableContent> list = new LinkedList<EjouTableContent>();
		Gson gson = new Gson();
		response.setContentType("application/json");
		try
		{
			PrintWriter respond = response.getWriter();
			Statement stmnt = connector.createStatement();
			setContent = stmnt.executeQuery("select * from ejournals;");
			while(setContent.next())
			{
				EjouTableContent tbcontent = new EjouTableContent();
				tbcontent.setDepartment(setContent.getString(1));
				tbcontent.setWebaddress(setContent.getString(2));
				list.add(tbcontent);
			}
			respond.println(gson.toJson(list));
		}
		catch(Exception ex)
		{
			System.out.println(ex);
		}
	}

}
