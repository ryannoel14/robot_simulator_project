package com.example.demo.Simulator.modele;

import java.util.Arrays;

/*
L’objectif de ce lot est de créer le robot
Il devra posséder les propriétés suivantes :
• Paramètres d’initialisation
o Deux entiers x et y (position)
o Un char or

*/	
public class Robot {
	    private int x;
	    private int y;
	    private char or;
	    private char[][] env;
	    private Capteur capteur;
	    private Measures measures; 
	  
	
	public Robot(int x, int y, char or, int colonne, int ligne){
	    this.x=x;
	    this.y=y;
	    this.or=or;
	    env = new char[colonne][ligne];
	    int i, j;
	    for(i=0; i<env.length; i++) {
	        for(j=0; j<env[i].length; j++) {
	            env[i][j]='U';
	        }
	    }
	    env[x][y]='R';
	    this.measures = new Measures();
	    this.capteur = new Capteur(x,y,or);
	}
	@Override
	public String toString() {
	    return "Robot [x=" + x + ", y=" + y + ", or=" + or + ", env="+ Arrays.toString(env) + "]";
	}
		
	
	public int getX() {
		return this.x;
	}
	public void setX(int x) {
		this.x = x;
	}
	public int getY() {
		return this.y;
	}
	public void setY(int y) {
		this.y = y;
	}
	public char getOr() {
		return this.or;
	}
	public void setOr(char or) {
		this.or = or;
	}
	
	
	
	
	
	public void Move(int xf, int yf){
		//System.out.println("je suis dans move");
		this.env[x][y]='C';
		x=xf;//coordonnées robot = coordonnées destination
		y=yf;
		this.env[xf][yf]='R';
		System.out.println("Je suis aux coordonnées x="+x+" y="+y);
		measures.IncrementDistParcour();
	}
	
	public void SetCaseObs(int x, int y) {
		this.env[x][y]='O';
	}
	
	public char getCaseObs(int x, int y) {
		return this.env[x][y];
	}
	
	public char[][] getEnv() {
	    return this.env;
	}
	
	public Capteur getCapteur() {
		return capteur;
	}
	
	public void setCapteur(Capteur capteur) {
		this.capteur = capteur;
	}
	
	public Measures getMeasures() {
		return measures;
	}
	public void setMeasures(Measures measures) {
		this.measures = measures;
	}
}