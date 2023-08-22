package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Catering {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int catering_id;
	private String menu;
	
	
	public Catering() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Catering(int catering_id, String menu) {
		super();
		this.catering_id = catering_id;
		this.menu = menu;
	}


	public int getCatering_id() {
		return catering_id;
	}


	public void setCatering_id(int catering_id) {
		this.catering_id = catering_id;
	}


	public String getMenu() {
		return menu;
	}


	public void setMenu(String menu) {
		this.menu = menu;
	}


	@Override
	public String toString() {
		return "Catering [catering_id=" + catering_id + ", menu=" + menu + "]";
	}
	
	
	

}
