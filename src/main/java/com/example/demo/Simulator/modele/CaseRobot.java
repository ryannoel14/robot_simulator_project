package com.example.demo.Simulator.modele;

import java.awt.Color;

//Définition de la case occupée par le robot 

public class CaseRobot extends Case {
	
		
		public CaseRobot(){super();}
		
		public CaseRobot(int x, int y) {super(x, y, Color.YELLOW);}

		@Override
		public Object clone() {return new CaseRobot(getX(),getY());}

		@Override
		public String toString() {
			return "R";
		}
	
}
