package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Media {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int media_id;
	private String media_type;

	public Media() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Media(int media_id, String media_type) {
		super();
		this.media_id = media_id;
		this.media_type = media_type;
	}

	public int getMedia_id() {
		return media_id;
	}

	public void setMedia_id(int media_id) {
		this.media_id = media_id;
	}

	public String getMedia_type() {
		return media_type;
	}

	public void setMedia_type(String media_type) {
		this.media_type = media_type;
	}

	@Override
	public String toString() {
		return "Media [media_id=" + media_id + ", media_type=" + media_type + "]";
	}

	

}
