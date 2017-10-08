package nala.resort.client;

public abstract class RoomType {
	protected abstract float getRate();
	protected float calculatePrice(int numOfDays) {
		return getRate() * numOfDays;
	}
}
