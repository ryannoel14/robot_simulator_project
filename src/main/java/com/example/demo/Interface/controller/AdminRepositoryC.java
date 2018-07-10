package com.example.demo.Interface.controller;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Interface.model.AdminC;

//interface permettant de se connecter à la bdd de Admin
public interface AdminRepositoryC extends CrudRepository<AdminC, Integer> {

	public List<AdminC> findByUsernameAndPassword (String username, String password);

	public AdminC findByUsername(String name);

	public AdminC findById(Integer id);
}
