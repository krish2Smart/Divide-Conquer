package com.kce.register;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
public class Samp {

	public static void main(String[] args) throws IOException, ParseException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		SimpleDateFormat df = new SimpleDateFormat("ddMMyyyy");
		Date date1 = df.parse(br.readLine());
		Calendar cal = Calendar.getInstance();
		cal.setTime(date1);
		System.out.println(cal.get(Calendar.WEEK_OF_YEAR));
	}

}
