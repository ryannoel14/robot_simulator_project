package com.example.demo.Simulator.modele;

/* Classe qui génère les méthodes permettant de donner des informations sur notre robot et sur son parcours
(pour transmettre à l'utilisateur)
  */

public class Measures {
	


	private int NbrCmbExecut = 0;
	private int NbrObsRenc = 0;
	private int NbrObsVis = 0;
	private int DistParcour = 0;
	
	
	public Measures(){	
	}
	
	//INCREMENTATION
	public void IncrementNbrCmbExecut(){
		NbrCmbExecut++;
	}
	
	public void IncrementNbrObsRenc(){
		NbrObsRenc++;
	}
	
	public void IncrementNbrObsVis(){
		NbrObsVis++;
	}
	
	public void IncrementDistParcour(){
		DistParcour++;
	}
	
	//GETTERS
	public int getNbrCmbExecut() {
		return NbrCmbExecut;
	}
	
	public int getNbrObsRenc() {
		return NbrObsRenc;
	}
	
	public int getNbrObsVis() {
		return NbrObsVis;
	}
	
	public int getDistParcour() {
		return DistParcour;
	}
	
	//SETTERS
	public void setNbrCmbExecut(int nbrCmbExecut) {
		NbrCmbExecut = nbrCmbExecut;
	}

	public void setNbrObsRenc(int nbrObsRenc) {
		NbrObsRenc = nbrObsRenc;
	}

	public void setNbrObsVis(int nbrObsVis) {
		NbrObsVis = nbrObsVis;
	}

	public void setDistParcour(int distParcour) {
		DistParcour = distParcour;
	}

	@Override
	public String toString() {
		return "Measures [NbrCmbExecut=" + NbrCmbExecut + ", NbrObsRenc=" + NbrObsRenc + ", NbrObsVis=" + NbrObsVis
				+ ", DistParcour=" + DistParcour + "]";
	}
	

}
