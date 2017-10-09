package nala.resort.client;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.Authenticator;

public class SendMail {
	String user="krishragul143@gmail.com";
	String pass="a@laporantham!zhan";
	String text, subject, to; 

	public SendMail(String text, String subject, String to) {
		super();
		this.text = text;
		this.subject = subject;
		this.to = to;
	}

	public void send() throws AddressException, MessagingException{ 
			  
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
		
		Authenticator authenticator = new Authenticator(){
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(user,pass);
			}
		};
		
		Session session = Session.getInstance(props, authenticator);
		MimeMessage message = new MimeMessage(session);
		message.setFrom(new InternetAddress(user));
		message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
		message.setSubject(subject);
		message.setText(text);
		
		Transport.send(message);
	}
	
}