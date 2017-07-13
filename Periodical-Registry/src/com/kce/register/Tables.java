package com.kce.register;
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
	
	public static class RemainderEntryTbl {
		private String id, publisherName, periodicalName, periodicalType, periodicity, month, year;

		public RemainderEntryTbl(String id, String publisherName, String periodicalName, String periodicalType,
				String periodicity, String month, String year) {
			super();
			this.id = id;
			this.publisherName = publisherName;
			this.periodicalName = periodicalName;
			this.periodicalType = periodicalType;
			this.periodicity = periodicity;
			this.month = month;
			this.year = year;
		}
	}
}
