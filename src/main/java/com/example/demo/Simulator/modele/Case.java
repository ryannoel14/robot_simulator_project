package com.example.demo.Simulator.modele;

import java.awt.Color;
import java.awt.Point;
/*
L’objectif de ce lot est de créer une classe abstraite qui définit les méthodes des différents types de cases 
que nous allons avoir sur la carte
• Paramètres d’initialisation
o Deux entiers x et y (poisition de la case)
o couleur de la case

*/	

public abstract class Case implements Cloneable{
	private Point coord;
	private boolean visible = false;
	private Color couleur;

	public Case(){this(0,0, Color.black);}
	
	public Case(int x, int y, Color couleur){
		coord = new Point(x,y);
		this.couleur=couleur;
	}
	
	protected int getX(){return coord.x;}
	protected int getY(){return coord.y;}	
	public Color getCouleur() {return couleur;}
	public boolean isVisible() {return visible;}
	public void setVisible(boolean visible) {this.visible = visible;}
	
	public void setCase(int x, int y){//place une case sur le point
		if(Carte.getLongueur()>x && Carte.getLargeur()>y){coord = new Point(x, y);}
		else{coord = new Point(0,0);}
	}
	
	public String toString(){
		String ret = getClass().getSimpleName().substring(0, 1);//retourne type d'une case
		return ret;
	}
	
	public abstract Object clone();
	}
