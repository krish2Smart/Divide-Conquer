package nala.resort.client;

import java.util.Random;

public abstract class Generator {
	protected int length = 0;
	protected String values = null;
	protected String reference = null;
	
	protected abstract void setDataMembers();
	public String getGeneratedValues() {
		Random rndm_method = new Random(); 
        char[] generatedValue = new char[length];
        for (int i = 0; i < length; i++) {
        	generatedValue[i] = values.charAt(rndm_method.nextInt(values.length()));
        }
		return reference+String.valueOf(generatedValue);
	}
}
