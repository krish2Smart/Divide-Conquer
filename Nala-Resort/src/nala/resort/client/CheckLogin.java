package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class CheckLogin
 */
@WebServlet("/CheckLogin")
public class CheckLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckLogin() {
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
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			Map<String, String> li = new TreeMap<String, String>();
			try {
				PreparedStatement ps = Database.getStmt("select * from management_login where username = ?");
				ps.setString(1, username);
				ResultSet rs = ps.executeQuery();
				if(rs.next()) {
					if(password.equals(rs.getString(2))) {
						Cookie ck = new Cookie("nala_resort", username);
						ck.setMaxAge(365*60*60*24);
						response.addCookie(ck);
						li.put("code","1");
						li.put("message","loading "+username);
					} else {
						throw new Exception("Password and Username desn't match");
					}
				} else {
					throw new Exception("Username desn't exist");
				}
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			} catch(Exception e) {
				li.put("code","0");
				li.put("message",e.getMessage());
				out.println(new Gson().toJson(li));
				out.flush();
				out.close();
			}
		}
	}
}
