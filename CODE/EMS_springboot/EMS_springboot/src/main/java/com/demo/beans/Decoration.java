package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Decoration {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int decoration_id;
	private String decor_type;

	public Decoration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Decoration(int decoration_id, String decor_type) {
		super();
		this.decoration_id = decoration_id;
		this.decor_type = decor_type;
	}

	public int getDecoration_id() {
		return decoration_id;
	}

	public void setDecoration_id(int decoration_id) {
		this.decoration_id = decoration_id;
	}

	public String getDecor_type() {
		return decor_type;
	}

	public void setDecor_type(String decor_type) {
		this.decor_type = decor_type;
	}

	@Override
	public String toString() {
		return "Decoration [decoration_id=" + decoration_id + ", decor_type=" + decor_type + "]";
	}


}
