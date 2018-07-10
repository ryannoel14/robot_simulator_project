package com.example.demo.Interface.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//class définisssant les utilisateur dans la bdd
@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String uniqueId;
	
	public User() {
	}
	
	public User(Integer user_id) {
		super();
		this.id = user_id;
	}
	
	public Integer getUser_id() {
		return id;
	}

	public String getUniqueId() {
		return uniqueId;
	}
	
}
