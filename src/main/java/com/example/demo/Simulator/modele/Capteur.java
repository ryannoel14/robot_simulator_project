package com.example.demo.Simulator.modele;

import java.awt.Point;

public class Capteur{

	/*
	L’objectif de ce lot est de créer un capteur qui observera les cases pour le robot.
	L’objet capteur, devra posséder les propriétés suivantes :
	• Paramètres d’initialisation
	o Deux entiers x et y 
	o Un char or
	• Une méthode permettant d'obtenir les coordonnées de la case observée par le capteur
	
 */	
	
	private int x;
	private int y;
	private char or ;
	
	
	public Capteur(int x, int y, char or){	
		this.x=x;
		this.y=y;
		this.or=or;
	}

	
	/**
	 * 
	 * @param x
	 * @param y
	 * @param or
	 * @return les coordonnées de la case vers laquelle le robot est orientée
	 */
	
	public Point getPoint(int x,int y,char or){ //création d'un point sur la case qu'on veut regarder
		System.out.println("je regarde la case de coord x="+x+" y="+y);
		Point p = new Point();
		switch(or){ //le point est en fonction de l'orientation du robot
		
			case 'N':
					p.x = x;
					p.y = y-1;
					break;
			case 'W':
					p.x = x-1;
					p.y = y;
					break;
				
			case 'E':
					p.x = x+1;
					p.y = y;
					break;
					
			case 'S':
					p.x = x;
					p.y = y+1;
					break;
		}
		return p;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public char getOr() {
		return or;
	}

	public void setOr(char or) {
		this.or = or;
	}
	
}
