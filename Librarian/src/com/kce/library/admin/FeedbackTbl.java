package com.kce.library.admin;

public class FeedbackTbl {
	private String id, name, emailId, mobNo, rollNo, feedback;
	
	public FeedbackTbl(String id, String name, String emailId, String mobNo, String rollNo, String feedback) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.mobNo = mobNo;
		this.rollNo = rollNo;
		this.feedback = feedback;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getMobNo() {
		return mobNo;
	}

	public void setMobNo(String mobNo) {
		this.mobNo = mobNo;
	}

	public String getRollNo() {
		return rollNo;
	}

	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

}
