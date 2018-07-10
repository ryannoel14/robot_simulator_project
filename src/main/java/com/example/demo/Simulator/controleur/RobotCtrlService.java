package com.example.demo.Simulator.controleur;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.Interface.controller.UserRepository;
import com.example.demo.Simulator.controleur.*;
import com.example.demo.Simulator.modele.Carte;
import com.example.demo.Simulator.modele.Case;
import com.example.demo.Simulator.modele.Measures;
import com.example.demo.Simulator.modele.Robot;

@Service
public class RobotCtrlService {
	
	RobotCtrl robotCtrl = new RobotCtrl(0, 0, 'N', 10, 10, 10);
	
	public boolean applyMvtUp(){
		return robotCtrl.up();
	}
	
	public boolean applyMvtDown(){
		return robotCtrl.down();	
	}
	
	public boolean applyMvtLeft(){
		return robotCtrl.left();
	}
	
	public boolean applyMvtRight(){
		return robotCtrl.right();
	}
	
	public Robot getRobot() {
		return robotCtrl.getRobot();
	}
	
	public Measures getMeasuresCtrl() {
		return robotCtrl.getMeasures();
	}
	
	
	public Carte getCarte() {
		return robotCtrl.getCarte();	
	}
	
	
	public ArrayList<String> getEnvRobot(){
		return robotCtrl.getMapRobot();
	}
	
	public ArrayList<String> getEnv(){
		return robotCtrl.recupcarte();
	}
	
	public boolean getState() {
		return robotCtrl.isState();
	}
	
	public void setState(boolean state) {
		robotCtrl.setState(state);
	}
}
	
	

