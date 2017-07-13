package com.kce.library.admin;

public class UsernameTbl {
	
	private String code, message, userName;

	public UsernameTbl(String code, String message, String userName) {
		super();
		this.code = code;
		this.message = message;
		this.userName = userName;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
