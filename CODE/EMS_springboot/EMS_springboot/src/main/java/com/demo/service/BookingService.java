package com.demo.service;

import java.util.Date;
import java.util.List;

import com.demo.beans.Bookings;
import com.demo.beans.NewData;

public interface BookingService {

	void addNewBooking(Bookings b);

	

	void deleteBooking (int event_id);



	List<Bookings> getAll();



	Bookings getById(int event_id);



//	void updateBooking(Bookings b);



	Date getByDate(String date);



	List<Bookings> getByEmail(String email_id);



	void updateBooking(Bookings b, NewData n);

}
