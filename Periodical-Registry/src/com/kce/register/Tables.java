package com.kce.register;

import java.util.Date;

public class Tables{
	public static class RegisterDisplayTbl {
		private String id, publisherName, periodicalName, periodicalType, periodicity, periodTo;

		public RegisterDisplayTbl(String id, String publisherName, String periodicalName, String periodicalType, String periodicity,
				String periodTo) {
			super();
			this.id = id;
			this.publisherName = publisherName;
			this.periodicalName = periodicalName;
			this.periodicalType = periodicalType;
			this.periodicity = periodicity;
			this.periodTo = periodTo;
		}
	}

	public static class RegisterEntryTbl {
		private String id, volumeNo, issueNo, publicationDate, dateOfReceipt;
	
		public RegisterEntryTbl(String id, String volumeNo, String issueNo, String publicationDate, String dateOfReceipt) {
			super();
			this.id = id;
			this.volumeNo = volumeNo;
			this.issueNo = issueNo;
			this.publicationDate = publicationDate;
			this.dateOfReceipt = dateOfReceipt;
		}
	}
	
	public static class EntryRemainderMonthlyTbl {
		private String id, publisherName, periodicalName, periodicalType, periodicity;
		int month, year;

		public EntryRemainderMonthlyTbl(String id, String publisherName, String periodicalName, String periodicalType, String periodicity, int month, int year) {
			super();
			this.id = id;
			this.publisherName = publisherName;
			this.periodicalName = periodicalName;
			this.periodicalType = periodicalType;
			this.periodicity = periodicity;
			this.month = month;
			this.year = year;
		}

		public String getId() {
			return id;
		}

		public String getPublisherName() {
			return publisherName;
		}

		public String getPeriodicalName() {
			return periodicalName;
		}

		public String getPeriodicalType() {
			return periodicalType;
		}

		public String getPeriodicity() {
			return periodicity;
		}

		public int getMonth() {
			return month;
		}

		public int getYear() {
			return year;
		}
		
	}
	
	public static class EntryRemainderWeeklyTbl {
		private String id, publisherName, periodicalName, periodicalType, periodicity, entryDate;

		public EntryRemainderWeeklyTbl(String id, String publisherName, String periodicalName, String periodicalType, String periodicity, String entryDate) {
			super();
			this.id = id;
			this.publisherName = publisherName;
			this.periodicalName = periodicalName;
			this.periodicalType = periodicalType;
			this.periodicity = periodicity;
			this.entryDate = entryDate;
		}

		public String getId() {
			return id;
		}

		public String getPublisherName() {
			return publisherName;
		}

		public String getPeriodicalName() {
			return periodicalName;
		}

		public String getPeriodicalType() {
			return periodicalType;
		}

		public String getPeriodicity() {
			return periodicity;
		}

		public String getEntryDate() {
			return entryDate;
		}

	}
}
