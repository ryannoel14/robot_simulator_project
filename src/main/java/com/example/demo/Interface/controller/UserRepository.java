package com.example.demo.Interface.controller;
import com.example.demo.Interface.model.User;


import org.springframework.data.repository.CrudRepository;



//interface permettant de se connecter à la bdd de User
public interface UserRepository extends CrudRepository<User, Integer> {

	public User findById(String id);

}
