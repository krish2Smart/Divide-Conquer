

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
 * Servlet implementation class Dow_table2
 */
@WebServlet("/Dow_table2")
public class Dow_table2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Dow_table2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		DbConnection connection = new DbConnection();
		Connection connector = connection.connect();
		ResultSet setContent=null;
		LinkedList<DownloadContentForm> list = new LinkedList<DownloadContentForm>();
		Gson gson = new Gson();
		response.setContentType("application/json");
		try
		{
			PrintWriter respond = response.getWriter();
			Statement stmnt = connector.createStatement();
			setContent = stmnt.executeQuery("select * from downloads_form;");
			while(setContent.next())
			{
				DownloadContentForm tbcontent = new DownloadContentForm();
				tbcontent.setForm_name(setContent.getString(1));
				tbcontent.setSta_stu(setContent.getString(2));
				tbcontent.setFile_name(setContent.getString(3));
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
