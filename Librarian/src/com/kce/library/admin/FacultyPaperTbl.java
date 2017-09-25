package com.kce.library.admin;

public class FacultyPaperTbl {
	private int id;
	private String staffName, department, paper, journalName, fileName;
	public FacultyPaperTbl(int id, String staffName, String department, String paper, String journalName,
			String fileName) {
		super();
		this.id = id;
		this.staffName = staffName;
		this.department = department;
		this.paper = paper;
		this.journalName = journalName;
		this.fileName = fileName;
	}
	
}
