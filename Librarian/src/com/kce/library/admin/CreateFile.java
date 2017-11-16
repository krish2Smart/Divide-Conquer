package com.kce.library.admin;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 * Servlet implementation class CreateFile
 */
@WebServlet("/CreateFile")
@MultipartConfig(fileSizeThreshold=1024*1024*500,
					maxFileSize=1024*1024*500,     
					maxRequestSize=1024*1024*500)
public class CreateFile extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateFile() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Part part = request.getPart("myFile");
		String path = request.getParameter("path");
		String fileName = request.getParameter("filename");
		String format = request.getParameter("format");
		if(fileName.contains("C:fakepath")) {
			fileName = fileName.replace("C:fakepath", "");
		}
		if(fileName.contains(".PDF")) {
			fileName = fileName.replace(".PDF",".pdf");
		}
        String savePath = "C:\\Program Files\\Apache Software Foundation\\Tomcat 8.0\\webapps\\Library\\"+format+"\\"+path;
		//String savePath = "C:\\Users\\Krish\\Divide&Conquer\\Library\\WebContent\\"+format+"\\"+path;
        System.out.println(fileName);
		File fileSaveDir=new File(savePath);
        if(!fileSaveDir.exists()){
            fileSaveDir.mkdir();
        }
        InputStream in = null;
        if(part!=null){
            in=part.getInputStream();
        }
        part.write(savePath + File.separator + fileName);
	}
}	