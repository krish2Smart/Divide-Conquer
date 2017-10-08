package nala.resort.client;

public class GetRoomTypeFactory {
	
	public RoomType getRoomType(String roomType) {
		if(roomType.equals("Standard")) {
			return new Standard();
		} else if(roomType.equals("Delux")) {
			return new Delux();
		} else if(roomType.equals("Ultra Delux")) {
			return new UltraDelux();
		}
		return null;
	}
}
