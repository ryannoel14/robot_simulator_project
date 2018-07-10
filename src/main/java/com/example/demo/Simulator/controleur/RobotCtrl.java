

package com.example.demo.Simulator.controleur;
import java.util.ArrayList;

//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;

import com.example.demo.Simulator.modele.Capteur;
import com.example.demo.Simulator.modele.Carte;

import com.example.demo.Simulator.modele.Case;
import com.example.demo.Simulator.modele.Measures;
import com.example.demo.Simulator.modele.Robot;


public class RobotCtrl {
	/*
	L’objectif de ce lot est de créer un contrôleur permettant de déplacer le robot dans l’environnement
	L’objet RobotCrt, devra posséder les propriétés suivantes :
	• Paramètre d’initialisation
	o Un environnement Env
	o Un robot Robot
	• Des méthodes permettant de déplacer le robot (UP, DOWN, LEFT, RIGHT)
	• Une méthode permettant de retourner ce que perçoit le capteur de vision du robot
	• Une méthode permettant de récupérer l’environnement utilisé Env.
	• Une méthode permettant de récupérer l’environnement perçu par le Robot
*/	
	
	private Carte carte;
	//private CarteRobot carterobot;
	private Robot robot;
	private ArrayList<String> environnement;
	private Measures measures;
	private boolean state=false;
	
	public RobotCtrl() {
		
	}
	
	
	public RobotCtrl(int posrobotx, int posroboty, char orrobot, int colonne, int ligne, int pctobstacles){
		this.carte = new Carte(colonne, ligne, pctobstacles);
		//this.carterobot = new CarteRobot(colonne, ligne,this.carte);
		this.robot = new Robot(posrobotx,posroboty,orrobot,colonne,ligne);
		this.environnement = recupcarte();
		this.measures = new Measures();
	}
	
	public ArrayList<String> getEnvironnement() {
		return environnement;
	}

	public void setEnvironnement(ArrayList<String> environnement) {
		this.environnement = environnement;
	}

	public Carte getCarte() {
		return carte;
	}

	public Robot getRobot() {
		return robot;
	}

	/**
	 * Déplacement vertical si déja orienté vers 'N', 
	 * sinon le robot s'oriente
	 */
	public boolean up(){
		boolean ret = false;
		int x=robot.getX();
		int y=robot.getY();
		System.out.println("\n je rentre dans la fonction up");

		if(robot.getOr() == 'N'){//si le robot regarde déjà le N, il se déplace
			if(robot.getY()>=1){//si le robot n'est pas sur le haut de la carte
				System.out.println("orientation = N");
				char or = robot.getOr();
				String Type = carte.getType(robot.getCapteur().getPoint(x,y,or));//recupere le type de la case future
				y = y-1;//on prend la coordonnée changée pour aller observer la case future
				System.out.println(Type+".");//le point est pour vérifier s'il n'y a pas de caractère caché derriere
				if(Type == null){System.out.println("Type is null");}
				if (Type != null){
					System.out.println("Type is not null");
					this.measures.IncrementNbrCmbExecut();
					if(Type.equals("C") || Type.equals("C ")){//si la case futur est de type "chemin"
						System.out.println("je suis dans type == C");
						robot.Move(x,y);//le robot se déplace
						Type="";
						ret = true;
					}
					else{
						System.out.println("getcase:"+this.robot.getCaseObs(x, y)+"type:"+Type.charAt(0));
						if((this.robot.getCaseObs(x, y) != Type.charAt(0)) &&  Type.charAt(0)!='R') {
							System.out.println("ok");
							this.measures.IncrementNbrObsVis();
						}
						this.measures.IncrementNbrObsRenc();
						System.out.println("Je ne bouge pas");
						robot.SetCaseObs(x, y);
						Type="";
					}
				}
			}else{
				System.out.println("Je suis à la limite de la carte");
			}
		}
		else{//si le robot ne regarde pas le N, on modofie juste son orientation mais il ne se déplace pas
			robot.setOr('N');
			System.out.println("je change l'orientation");
		}
		//return ret;
		updateMeasures();
		return ret;
	}
	
	
	/**
	 *  Déplacement vertical si déja orienté vers 'S', 
	 * sinon le robot s'oriente
	 */
	
	public boolean down(){
		boolean ret = false;
		int x=robot.getX();
		int y=robot.getY();
		
		System.out.println("\n je rentre dans la fonction down");
		if(robot.getOr() == 'S'){//si le robot regarde déjà le S, il se déplace
			if(robot.getY()<carte.getLongueur()-1){//si le robot n'est pas sur le bas de la carte
				System.out.println("orientation = S");
				char or=robot.getOr();
				String Type = carte.getType(robot.getCapteur().getPoint(x,y,or));
				y = y+1;

				System.out.println(Type+".");
				if (Type != null){
					this.measures.IncrementNbrCmbExecut();
					if(Type.equals("C") || Type.equals("C ")){
						//System.out.println("je suis dans type == C");
						robot.Move(x,y);
						Type="";
						ret = true;
					}
					else{
						System.out.println("getcase:"+this.robot.getCaseObs(x, y)+"type:"+Type.charAt(0));
						if((this.robot.getCaseObs(x, y) != Type.charAt(0)) &&  Type.charAt(0)!='R') {
							System.out.println("ok");
							this.measures.IncrementNbrObsVis();
						}
						this.measures.IncrementNbrObsRenc();
						robot.SetCaseObs(x, y);
						System.out.println("Je ne bouge pas");
						Type="";
					}
				}
			}else{
				System.out.println("Je suis à la limite de la carte");
			}
		}
		else{//si le robot ne regarde pas le S, on modofie juste son orientation mais il ne se déplace pas
			System.out.println("je change l'orientation");
			robot.setOr('S');
		}
		updateMeasures();
		return ret;
	}
	
	
	
	
	/**
	 *  Déplacement horizontal si déja orienté vers 'W', 
	 * sinon le robot s'oriente
	 */
	
	public boolean left(){
		boolean ret =  false;
		int x=robot.getX();
		int y=robot.getY();
		System.out.println("\n je rentre dans la fonction left");
		if(robot.getOr() == 'W'){//si le robot regarde déjà le W, il se déplace
			if(robot.getX()>=1){//si le robot n'est pas sur la gauche de la carte
				System.out.println("orientation = W");
				char or=robot.getOr();
				String Type = carte.getType(robot.getCapteur().getPoint(x,y,or));
				x = x-1;

				System.out.println(Type+".");
				if (Type != null){
					this.measures.IncrementNbrCmbExecut();
					if(Type.equals("C") || Type.equals("C ")){
						//System.out.println("je suis dans type == C");
						robot.Move(x,y);
						Type="";
						ret = true;
					}
					else{
						System.out.println("getcase:"+this.robot.getCaseObs(x, y)+"type:"+Type.charAt(0));
						if((this.robot.getCaseObs(x, y) != Type.charAt(0)) &&  Type.charAt(0)!='R') {
							System.out.println("ok");
							this.measures.IncrementNbrObsVis();
						}
						this.measures.IncrementNbrObsRenc();
						robot.SetCaseObs(x, y);
						System.out.println("Je ne bouge pas");
						Type="";
					}
				}
			}else{
				System.out.println("Je suis à la limite de la carte");
			}
		}
		else{//si le robot ne regarde pas le W, on modofie juste son orientation mais il ne se déplace pas
			System.out.println("je change l'orientation");
			robot.setOr('W');
		}
		updateMeasures();
		return ret;
	}
	
	
	/**
	 *  Déplacement horizontal si déja orienté vers 'E', 
	 * sinon le robot s'oriente
	 */
	
	public boolean right(){
		boolean ret = false;
		int x=robot.getX();
		int y=robot.getY();
		
		System.out.println("\n je rentre dans la fonction right");
		System.out.println("coord : "+robot.getOr());
		if(robot.getOr() == 'E'){//si le robot regarde déjà le E, il se déplace
			if(robot.getX()<carte.getLargeur()-1){//si le robot n'est pas sur la droite de la carte
				System.out.println("orientation = E");
				char or=robot.getOr();
				String Type = carte.getType(robot.getCapteur().getPoint(x,y,or));
				x = x+1;

				System.out.println(Type+".");
				if (Type != null){
					this.measures.IncrementNbrCmbExecut();
					if(Type.equals("C") || Type.equals("C ")){
						//System.out.println("je suis dans type == C");
						robot.Move(x,y);
						Type="";
						ret = true;
					}
					else{
						System.out.println("getcase:"+this.robot.getCaseObs(x, y)+"type:"+Type.charAt(0));
						if((this.robot.getCaseObs(x, y) != Type.charAt(0)) &&  Type.charAt(0)!='R') {
							System.out.println("ok");
							this.measures.IncrementNbrObsVis();
						}
						this.measures.IncrementNbrObsRenc();
						robot.SetCaseObs(x, y);
						System.out.println("Je ne bouge pas");
						Type="";
					}
				}
			}else{
				System.out.println("Je suis à la limite de la carte");
			}
		}
		else{//si le robot ne regarde pas le E, on modofie juste son orientation mais il ne se déplace pas
			System.out.println("je change l'orientation");
			robot.setOr('E');
		}
		updateMeasures();
		return ret;
	}
	
	public void updateMeasures() {
		Measures measures = new Measures();
		measures.setDistParcour(this.robot.getMeasures().getDistParcour());
		measures.setNbrCmbExecut(this.measures.getNbrCmbExecut());
		measures.setNbrObsRenc(this.measures.getNbrObsRenc());
		measures.setNbrObsVis(this.measures.getNbrObsVis());
		this.setMeasures(measures);
	}
		
	/**
	 * 
	 * @return Un tableau de String représentant l'environnement
	 * Les cases sont parcourues et pour chaque type de case, on 
	 * ajoute l'entier correspondant (équivalent de la matrice ASCII)
	 */
	
	public ArrayList<String> recupcarte(){
		ArrayList<String> ret = new ArrayList<String>();
		ArrayList<ArrayList<Case>> test=carte.getCases();
		for(ArrayList<Case> ligne:test){
			for(Case c:ligne){
				if(c.toString().equals("C")) {
					ret.add("4");
				}
				if(c.toString().equals("O")) {
					ret.add("1");
				}
				if(c.toString().equals("U")) {
					ret.add("2");
				}
				if(c.toString().equals("R")) {
					ret.add("3");
				}
			}
		}
		return ret;
	}
	
	/**
	 * 
	 * @return Un tableau de String représentant l'environnement du robot
	 * Les cases sont parcourues et pour chaque type de case, on 
	 * ajoute l'entier correspondant (équivalent de la matrice ASCII)
	 */
	/*public ArrayList<String> recupcarterobot(){
		ArrayList<String> ret = new ArrayList<String>();
		ArrayList<ArrayList<Case>> test=carterobot.getCases();
		for(ArrayList<Case> ligne:test){
			for(Case c:ligne){
				if(c.toString().equals("C")) {
					ret.add("0");
				}
				if(c.toString().equals("O")) {
					ret.add("1");
				}
				if(c.toString().equals("U")) {
					ret.add("2");
				}
				if(c.toString().equals("R")) {
					ret.add("3");
				}
			}
		}
		return ret;
	}*/

	
	public ArrayList<String> getMapRobot(){
		ArrayList<String> ret = new ArrayList<String>();
		char[][] env =robot.getEnv();
		
		int i, j;
	    for(i=0; i<env.length; i++) {
	        for(j=0; j<env[i].length; j++) {
	        	if(env[j][i]=='C') {
					ret.add("4");
				}
				if(env[j][i]=='O') {
					ret.add("1");
				}
				if(env[j][i]=='U') {
					ret.add("2");
				}
				if(env[j][i]=='R') {
					ret.add("3");
				}
	        }
	    }
	    return ret;
	}
	
	public Measures getMeasures() {
		return measures;
	}


	public void setMeasures(Measures measures) {
		this.measures = measures;
	}
	
	public boolean isState() {
		return state;
	}
	
	public void setState(boolean state) {
		this.state = state;
	}

}

