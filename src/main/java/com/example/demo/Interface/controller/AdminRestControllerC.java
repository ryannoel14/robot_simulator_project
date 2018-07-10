package com.example.demo.Interface.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Interface.model.*;

//Controller REST du micro service Admin
@RestController
public class AdminRestControllerC {

	//connexion avec la class service
	@Autowired
	private AdminServiceC adminService;
	
	//renvoie la list de tous les admins dans la bdd
	@RequestMapping("/admins")
	private List<AdminC> getAllAdmins() {
		return adminService.getAllAdmins();

	}

	//ajoute un admin à la bdd
	@RequestMapping(method=RequestMethod.POST,value="/admins")
	public void addAdmin(@RequestBody AdminC admin) {
		adminService.addAdmin(admin);
	}
	
	//renvoie un admin à partir de son id
	@RequestMapping("/admins/{id}")
	private AdminC getAdmin(@PathVariable String id) {
		return adminService.getAdmin(id);
	}
	
	//verifie que l'admin existe dans la bdd
	@RequestMapping(method=RequestMethod.POST,value="/login")
	public boolean isLoginIn(@RequestBody AdminC admin) {
		return adminService.isLoginIn(admin);
	}

	//renvoie l'id d'un admin à partir de son username
	@RequestMapping(method=RequestMethod.GET,value="/username/{name}")
	private Integer getAdminId(@PathVariable String name) {
		return adminService.getAdminId(name);
	}
	
	//vérifie l'état de connexion de l'admin
	@RequestMapping(method=RequestMethod.GET,value="/signedin/{Id}")
	private boolean isSignedin(@PathVariable Integer Id){
		return adminService.getSignedin(Id);
	}
	
	//on change l'état de connexion de l'admin
	@RequestMapping(method=RequestMethod.POST,value="/signedin/{Id}/{signedin}")
	private void setSignedin(@PathVariable Integer Id, @PathVariable boolean signedin){
		adminService.setSignedin(Id, signedin);
	}
	
}
