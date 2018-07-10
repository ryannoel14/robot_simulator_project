package com.example.demo.Interface.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//class définisssant les utilisateur dans la bdd
@Entity
public class AdminC {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String username;
	private String password;
	private boolean signedin;
	
	public AdminC() {
		
	}
	
	/*public Admin(Integer admin_id, String username, String password) {
		
		this.id = admin_id;
		this.username = username;
		this.password = password;
	}*/

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getAdmin_id() {
		return id;
	}

	public boolean getSignedin() {
		return signedin;
	}

	public void setSignedin(boolean signedin) {
		this.signedin = signedin;
	}
	
	
	
}
