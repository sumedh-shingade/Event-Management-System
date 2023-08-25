package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Bookings;
import com.demo.beans.Payment;
import com.demo.service.BookingService;
import com.demo.service.PaymentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	PaymentService paymentService;

	@Autowired
	BookingService bookingService;

	@GetMapping("/{event_id}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable int event_id) {
//		System.out.println(event_id);
		Bookings b = bookingService.getById(event_id);
		System.out.println(b);
		
		if (b != null) {
//			int exp_attendee = b.getExp_attendee();
//			
			int p_id = b.getPayment().getPayment_id();
//			String status = b.getPayment().getStatus();
//			int v_cost = b.getVenue().getVenue_cost();
//			int c_cost =b.getCatering().getMenu_cost();
//			c_cost= c_cost*exp_attendee;
//			int m_cost = b.getMedia().getMedia_cost();
//			int d_cost = b.getDecoration().getDecor_cost();
//			int total = b.getPayment().getTotal();
//			
//			Payment p = new Payment(p_id, status, v_cost, c_cost, m_cost, d_cost, total);
			System.out.println(p_id);
			Payment p =paymentService.getById(p_id);

			return ResponseEntity.ok(p);

		} else {
			
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

}
