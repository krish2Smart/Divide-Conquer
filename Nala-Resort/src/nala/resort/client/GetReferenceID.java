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
 * Servlet implementation class GetReferenceID
 */
@WebServlet("/GetReferenceID")
public class GetReferenceID extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetReferenceID() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try(PrintWriter out = response.getWriter()) {
			String referenceID = null;
			boolean exist = false;
			Map<String, String> li = new TreeMap<String, String>();
			if(request.getCookies() != null) {
				Cookie[] cks = request.getCookies();
				for(int i = 0; i < cks.length;i++) {
					if(cks[i].getName().equals("referenceID")) {
						exist = true;
						referenceID = cks[i].getValue();
					}
				}
			} 
			if(exist) {
				li.put("code", "1");
				li.put("message", referenceID);
			} else {
				li.put("code", "0");
				li.put("message", "Not available");
			}
			out.println(new Gson().toJson(li));
			out.flush();
			out.close();
		}
	}

}
