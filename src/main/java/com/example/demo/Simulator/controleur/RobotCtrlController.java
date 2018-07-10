package com.example.demo.Simulator.controleur;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Simulator.controleur.RobotCtrl;
import com.example.demo.Simulator.modele.Carte;
import com.example.demo.Simulator.modele.Case;
import com.example.demo.Simulator.modele.Measures;
import com.example.demo.Simulator.modele.Robot;


@RestController
public class RobotCtrlController {
	
	@Autowired
	private RobotCtrlService robotCtrlService;
	
	@RequestMapping("/cmd/up")
	private boolean applyMvtUp(){
		return robotCtrlService.applyMvtUp();
	}
	
	@RequestMapping("/cmd/down")
	private boolean applyMvtDown(){
		return robotCtrlService.applyMvtDown();
	}
	
	@RequestMapping("/cmd/left")
	private boolean applyMvtLeft(){
		return robotCtrlService.applyMvtLeft();
	}
	
	@RequestMapping("/cmd/right")
	private boolean applyMvtRight(){
		return robotCtrlService.applyMvtRight(); 
	}
	
	@RequestMapping("/carte")
	private Carte getCarte(){
		return robotCtrlService.getCarte();
	}

	
	@RequestMapping("/robot")
	private Robot getRobot(){
		return robotCtrlService.getRobot();
	}
	
	@RequestMapping("/measures")
	private Measures getMeasuresCtrl(){
		return robotCtrlService.getMeasuresCtrl();
	}
	
	
	@RequestMapping("/env")
	private ArrayList<String> getEnv(){
		return robotCtrlService.getEnv();
	}
	
	@RequestMapping("/envRobot")
	private ArrayList<String> getEnvRobot(){
		return robotCtrlService.getEnvRobot();
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/state")
	private boolean getState(){
		return robotCtrlService.getState();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/state/{state}")
	private void setState(@PathVariable boolean state){
		robotCtrlService.setState(state);
	}
	
	
}
