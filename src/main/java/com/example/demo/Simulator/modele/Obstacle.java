package com.example.demo.Simulator.modele;
import java.awt.Color;
//Définition des cases occupées par des obstacles 

public class Obstacle extends Case{
		public Obstacle(){super();}	
		
		public Obstacle(int x, int y) {super(x, y, Color.black);}
		
		@Override
		public Object clone() {return new Obstacle(getX(),getY());}
}
