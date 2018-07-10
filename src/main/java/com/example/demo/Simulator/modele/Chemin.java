package com.example.demo.Simulator.modele;

import java.awt.Color;
//Définition des cases libres 

public class Chemin extends Case {
	
		private int nbMines = 0;
		
		public Chemin(){super();}
		
		public Chemin(int x, int y) {super(x, y, Color.GRAY);}

		@Override
		public Object clone() {return new Chemin(getX(),getY());}
		
		public String toString(){
			String ret = ""+nbMines;
			if(!isVisible()){ret=super.toString();}
			return ret;
		}
}

