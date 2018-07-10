package com.example.demo.Interface.controller;
import com.example.demo.Interface.model.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


//Controller REST du micro service User
@RestController
public class UserRestController {

	//connexion avec la class service
	@Autowired
	private UserService userService;
	
	//renvoie la list de tous les utilisateurs dans la bdd
	@RequestMapping("/users")
	private List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	//ajoute un utilisateur à la bdd
	@RequestMapping(method=RequestMethod.POST,value="/users")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	//supprime un utilisateur de la bdd 
	@RequestMapping(method=RequestMethod.DELETE,value="/users/{id}")
	private void deleteUser(@PathVariable Integer id) {
		userService.deleteUser(id);
	}
	
	
	//renvoie un utilisateur à partir de son id
	@RequestMapping("/users/{id}")
	private User getUser(@PathVariable String id) {
		return userService.getUser(id);
	}
	
}
