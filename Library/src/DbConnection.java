import java.sql.Connection;
import java.sql.DriverManager;

public class DbConnection {

	public DbConnection() {
		// TODO Auto-generated constructor stub
	}
	public Connection connect()
	{
		Connection connector = null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			connector = DriverManager.getConnection("jdbc:mysql://localhost:3306/pdf", "root", "");
			return connector;
		}
		catch(Exception ex)
		{
			System.out.println(ex);
			return connector;
		}
	}

}
