package com.kce.register;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Database {
	public static Connection getConn() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/periodical_register", "root", "");
			return conn;
		} catch(Exception e) {
			return null;
		}
	}
	public static PreparedStatement getStmt(String sql) {
		try {
			return getConn().prepareStatement(sql);
		} catch(Exception e) {
			return null;
		}
	}
	public static void main(String args[]) {
		System.out.println(getConn());
	}
}