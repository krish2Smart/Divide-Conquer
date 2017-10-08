package nala.resort.client;

public class ReferenceIDGenerator extends Generator{

	@Override
	public void setDataMembers() {
		length = 4;
		values = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
		reference = "Nala@";
	}

}
