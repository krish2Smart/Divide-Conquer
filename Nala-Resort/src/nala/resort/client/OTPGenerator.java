package nala.resort.client;

public class OTPGenerator extends Generator {

	@Override
	protected void setDataMembers() {
		length = 7;
		values = "0123456789";
	}

}
