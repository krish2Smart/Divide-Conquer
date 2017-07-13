

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
 * Servlet implementation class Jou_Table
 */
@WebServlet("/Jou_Table")
public class Jou_Table extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Jou_Table() {
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
		String file_name = request.getParameter("file_name");
		LinkedList<Jou_TableContent> list = new LinkedList<Jou_TableContent>();
		Gson gson = new Gson();
		response.setContentType("application/json");
		try
		{
			PrintWriter respond = response.getWriter();
			Statement stmnt = connector.createStatement();
			if(file_name.equals("MBA")||file_name.equals("MCA"))
			{
				if(file_name.equals("MBA"))
				{
					setContent = stmnt.executeQuery("select * from mba_table where book_name!='TOTAL' and book_name!='GENERAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_count(setContent.getInt(2));
						tbcontent.setInat_count(setContent.getInt(3));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select * from mba_table where book_name='GENERAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_count(setContent.getInt(2));
						tbcontent.setInat_count(setContent.getInt(3));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select * from mba_table where book_name='TOTAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_count(setContent.getInt(2));
						tbcontent.setInat_count(setContent.getInt(3));
						list.add(tbcontent);
					}
				}
				else if(file_name.equals("MCA"))
				{
					setContent = stmnt.executeQuery("select * from mca_table where book_name!='TOTAL' and book_name!='GENERAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_count(setContent.getInt(2));
						tbcontent.setInat_count(setContent.getInt(3));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select * from mca_table where book_name='GENERAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_count(setContent.getInt(2));
						tbcontent.setInat_count(setContent.getInt(3));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select * from mca_table where book_name='TOTAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_count(setContent.getInt(2));
						tbcontent.setInat_count(setContent.getInt(3));
						list.add(tbcontent);
					}
				}
				respond.println(gson.toJson(list));
			}
			else
			{
				if(file_name.equals("Journals"))
				{
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from jou_table where degree='B.E';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from jou_table where degree='M.E';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from jou_table where degree='SCIENCE & HUMANITIES' or degree='GENERAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from jou_table where degree='TOTAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from jou_table where degree='MBA' or degree='MCA';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from jou_table where degree='Overall TOTAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
				}
				else if(file_name.equals("Magazines"))
				{
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from mag_table where degree='B.E';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from mag_table where degree='M.E';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from mag_table where degree='SCIENCE & HUMANITIES' or degree='GENERAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from mag_table where degree='TOTAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from mag_table where degree='MBA' or degree='MCA';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
					setContent = stmnt.executeQuery("select department,nat_file_name,nat_count,inat_file_name,inat_count from mag_table where degree='Overall TOTAL';");
					while(setContent.next())
					{
						Jou_TableContent tbcontent = new Jou_TableContent();
						tbcontent.setDepartment(setContent.getString(1));
						tbcontent.setNat_fileName(setContent.getString(2));
						tbcontent.setNat_count(setContent.getInt(3));
						tbcontent.setInat_fileName(setContent.getString(4));
						tbcontent.setInat_count(setContent.getInt(5));
						list.add(tbcontent);
					}
				}
				respond.println(gson.toJson(list));
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
}
