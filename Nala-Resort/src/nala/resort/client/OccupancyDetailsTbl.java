package nala.resort.client;

import java.util.Date;

public class OccupancyDetailsTbl {
	private int id;
	private String personName, aadharNo;
	private Date checkIn, checkOut;
	private String phoneNo, mailID;
	private int roomNo;
	private boolean dryCleaning, laundryFacilities, freeNewspapers;
	private float amountPaid, price;
	private String referenceID;
	private Date bookedAt;
	public OccupancyDetailsTbl(int id, String personName, String aadharNo, Date checkIn, Date checkOut, String phoneNo,
			String mailID, int roomNo, boolean dryCleaning, boolean laundryFacilities, boolean freeNewspapers,
			float amountPaid, float price, String referenceID, Date bookedAt) {
		super();
		this.id = id;
		this.personName = personName;
		this.aadharNo = aadharNo;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.phoneNo = phoneNo;
		this.mailID = mailID;
		this.roomNo = roomNo;
		this.dryCleaning = dryCleaning;
		this.laundryFacilities = laundryFacilities;
		this.freeNewspapers = freeNewspapers;
		this.amountPaid = amountPaid;
		this.price = price;
		this.referenceID = referenceID;
		this.bookedAt = bookedAt;
	}
		
}
