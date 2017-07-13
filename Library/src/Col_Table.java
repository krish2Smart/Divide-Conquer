

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
 * Servlet implementation class Col_Table
 */
@WebServlet("/Col_Table")
public class Col_Table extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Col_Table() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		DbConnection connection = new DbConnection();
		Connection connector = connection.connect();
		LinkedList<Col_TableContent> list = new LinkedList<Col_TableContent>();
		Gson gson = new Gson();
		response.setContentType("application/json");
		try
		{
			PrintWriter respond = response.getWriter();
			Statement stmnt = connector.createStatement();
			ResultSet setContent = stmnt.executeQuery("select department,file_name,cd_count from col_cd where degree='B.E';");
			while(setContent.next())
			{
				Col_TableContent tbcontent = new Col_TableContent();
				tbcontent.setDepartment(setContent.getString(1));
				tbcontent.setFileName(setContent.getString(2));
				tbcontent.setCd_count(setContent.getInt(3));
				list.add(tbcontent);
			}
			setContent = stmnt.executeQuery("select department,file_name,cd_count from col_cd where degree='M.E';");
			while(setContent.next())
			{
				Col_TableContent tbcontent = new Col_TableContent();
				tbcontent.setDepartment(setContent.getString(1));
				tbcontent.setFileName(setContent.getString(2));
				tbcontent.setCd_count(setContent.getInt(3));
				list.add(tbcontent);
			}
			setContent = stmnt.executeQuery("select department,file_name,cd_count from col_cd where degree!='MBA' and degree!='MCA' and degree!='B.E'and degree!='M.E' and degree!='Total';");
			while(setContent.next())
			{
				Col_TableContent tbcontent = new Col_TableContent();
				tbcontent.setDepartment(setContent.getString(1));
				tbcontent.setFileName(setContent.getString(2));
				tbcontent.setCd_count(setContent.getInt(3));
				list.add(tbcontent);
			}
			setContent = stmnt.executeQuery("select department,file_name,cd_count from col_cd where degree='Total';");
			while(setContent.next())
			{
				Col_TableContent tbcontent = new Col_TableContent();
				tbcontent.setDepartment(setContent.getString(1));
				tbcontent.setFileName(setContent.getString(2));
				tbcontent.setCd_count(setContent.getInt(3));
				list.add(tbcontent);
			}
			setContent = stmnt.executeQuery("select department,file_name,cd_count from col_cd where degree='MBA' or degree='MCA';");
			while(setContent.next())
			{
				Col_TableContent tbcontent = new Col_TableContent();
				tbcontent.setDepartment(setContent.getString(1));
				tbcontent.setFileName(setContent.getString(2));
				tbcontent.setCd_count(setContent.getInt(3));
				list.add(tbcontent);
			}
			setContent = stmnt.executeQuery("select department,file_name,cd_count from col_cd where degree='Overall Total';");
			while(setContent.next())
			{
				Col_TableContent tbcontent = new Col_TableContent();
				tbcontent.setDepartment(setContent.getString(1));
				tbcontent.setFileName(setContent.getString(2));
				tbcontent.setCd_count(setContent.getInt(3));
				list.add(tbcontent);
			}
			respond.println(gson.toJson(list));
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
}
