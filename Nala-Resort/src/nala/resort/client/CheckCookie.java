package nala.resort.client;

import java.io.IOException;
import java.io.PrintWriter;
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
 * Servlet implementation class CheckCookie
 */
@WebServlet("/CheckCookie")
public class CheckCookie extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckCookie() {
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
			String user = "";
			boolean isLogged = false;
			if(request.getCookies() != null) {
				Cookie cks[] = request.getCookies();
				for(int i = 0; i < cks.length; i++) {
					if(cks[i].getName().equals("nala_resort")) {
						isLogged = true;
						user = cks[i].getValue();
						break;
					}
				}
			}
			Map<String, String> li = new TreeMap<String, String>();
			if(isLogged) {
				li.put("code", "1");
				li.put("username", user);
			} else {
				li.put("code", "0");
				li.put("message", "Please log in");
			}
			out.println(new Gson().toJson(li));
			out.flush();
			out.close();
		}
	}

}
