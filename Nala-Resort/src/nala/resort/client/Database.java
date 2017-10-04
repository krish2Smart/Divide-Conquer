package nala.resort.client;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Database {
	private static Connection getConn() throws ClassNotFoundException, SQLException {
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://localhost:3306/resort", "root", "");
	}
	
	public static PreparedStatement getStmt(String sql) throws ClassNotFoundException, SQLException {
		return getConn().prepareStatement(sql);
	}
}
