package com.example.demo.Interface.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Interface.model.*;

//classe métier de User
@Service
public class AdminServiceC {

	@Autowired
	private AdminRepositoryC adminRepository;
	
	//renvoie la list de tous les admin dans la bdd
	public List<AdminC> getAllAdmins() {
		List<AdminC> admins = new ArrayList<>();
		adminRepository.findAll().forEach(admins::add);
		return admins;
	}
	
	//renvoie un Admin à partir de son id
	public AdminC getAdmin(String id) {
		return adminRepository.findOne(Integer.valueOf(id));
	}

	//ajoute un Admin à la bdd
	public void addAdmin(AdminC admin) {
		adminRepository.save(admin);
	}
	
	//vérifie l'existence d'un Admin dans la bdd
	public boolean isLoginIn (AdminC admin) {
		return !adminRepository.findByUsernameAndPassword(admin.getUsername(), admin.getPassword()).isEmpty();
	}

	//renvoie l'id d'un Admin à partir de son username
	public Integer getAdminId(String name) {
		Integer id=null;
		try {
			id= adminRepository.findByUsername(name).getAdmin_id();
			
		} catch (Exception e) {
			
		}
		return id;
	}
	
	public boolean getSignedin(Integer Id) {
		return adminRepository.findById(Id).getSignedin();
	}
	
	public void setSignedin(Integer Id, boolean signedin) {
		AdminC ad = adminRepository.findById(Id);
		ad.setSignedin(signedin);
		adminRepository.save(ad);
	}
	
}
