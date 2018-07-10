package com.example.demo.Interface.controller;

import com.example.demo.Interface.model.User;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



//classe métier de User
@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	//renvoie la list de tous les User dans la bdd
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<>();
		userRepository.findAll().forEach(users::add);
		return users;
	}
	
	//renvoie un User à partir de son id
	public User getUser(String id) {
		return userRepository.findOne(Integer.valueOf(id));
	}

	//ajoute un User à la bdd
	public void addUser(User user) {
		userRepository.save(user);
	}

	public void deleteUser(Integer id) {
		userRepository.delete(id);
	}

}
