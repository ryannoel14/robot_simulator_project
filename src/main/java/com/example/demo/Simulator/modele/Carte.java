package com.example.demo.Simulator.modele;

import java.awt.Point;
import java.util.ArrayList;
import java.util.Formatter;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;

import com.example.demo .Simulator.modele.CaseRobot;

public class Carte {

	private static final int MIN_COL = 5;
	private static final int MIN_LIGNE = 5;
	private static final int MAX_COL = 100;
	private static final int MAX_LIGNE = 100;
	private static final int DEFAULT_COL = 8;
	private static final int DEFAULT_LIGNE = 8;
	private ArrayList<ArrayList<Case>> cases = new ArrayList<ArrayList<Case>>();
	private static int longueur=8;
	private static int largeur=8;
	private static int pctObstacles;
	private static Map<Case, Integer> stats;

	private float nbObstacles;


	
	public Carte(int x, int y, int pctObstacles){
		
		Carte.longueur = x;
		Carte.largeur = y;
		Carte.pctObstacles=pctObstacles;
		
		if(pctObstacles>0 && pctObstacles<=100){
			this.nbObstacles =  Math.round((float) (x*y*pctObstacles/(100.0000000)));
			//System.out.println("Vous avez créé environ : "+this.nbObstacles+" Obstacles");
		}
		
		Carte.stats = createMap();
		init();
		
	}
		
    private static Map<Case, Integer> createMap()
    {	
        Map<Case,Integer> myMap = new LinkedHashMap<Case,Integer>();
        
        //Creation du robot
        //myMap.put(new Robot(), 5);
        
        myMap.put(new Obstacle(), Carte.pctObstacles);
        myMap.put(new Chemin(), 100);
        return myMap;
    }
	
	public ArrayList<ArrayList<Case>> getCases() {return cases;}

	private void init() {
		for (int i=0;i<Carte.longueur;i++){
			ArrayList<Case> al = new ArrayList<Case>();
			for(int j=0;j<Carte.largeur;j++){
				if((Math.round(Carte.longueur/2)==Math.round(Carte.largeur/2))&&(i==j)&&(i==Math.round(Carte.largeur/2))){
					//Permet d'ajouter un robot
					Case c = new CaseRobot(i,j);
					al.add(c);
				}else{
					al.add(tirage(i,j));
				}
			}
			cases.add(al);
		}		
	}
	
	private Case tirage(int x, int y){//tirage aléatoire du type de case
		Case ret = null;
		int alea = (int)(Math.random()*100);
		boolean trouve = false;
		Iterator<Entry<Case, Integer>> it = Carte.stats.entrySet().iterator();
	    while (!trouve && it.hasNext()) {
	        Map.Entry<Case, Integer> entry = (Map.Entry<Case, Integer>)it.next();
	        if(entry.getValue().intValue()>alea){
	        	ret = (Case) entry.getKey().clone();
	        	ret.setCase(x, y);
	        	trouve = true;
	        }
	    }
	    return ret;
	}
	
	private Case find(int x, int y){//recupere une instance de case en utilisant ses coordonnées
		Case ret = null;
		System.out.println(x+","+y);
		ret=cases.get(x).get(y);
	    return ret;
	}
	
	public String getType(Point p){//obtenir type d'une case, si type = U, on demande le type à l'Env connu et on le return
		System.out.println(this.cases);
		Case c = find(p.x,p.y);//creation instance de case aux coordonnées du point que l'on veut
		String typeCase = c.toString();//la case retourne son type

		return typeCase;
	}

	public static int getLongueur() {
		return longueur;
	}

	public static void setLongueur(int longueur) {
		Carte.longueur = longueur;
	}

	public static int getLargeur() {
		return largeur;
	}

	public static void setLargeur(int largeur) {
		Carte.largeur = largeur;
	}

	public static int getPctObstacles() {
		return pctObstacles;
	}

	public static void setPctObstacles(int pctObstacles) {
		Carte.pctObstacles = pctObstacles;
	}

	public static Map<Case, Integer> getStats() {
		return stats;
	}

	public static void setStats(Map<Case, Integer> stats) {
		Carte.stats = stats;
	}

	public float getNbObstacles() {
		return nbObstacles;
	}

	public void setNbObstacles(float nbObstacles) {
		this.nbObstacles = nbObstacles;
	}


	public static int getMinCol() {
		return MIN_COL;
	}

	public static int getMinLigne() {
		return MIN_LIGNE;
	}

	public static int getMaxCol() {
		return MAX_COL;
	}

	public static int getMaxLigne() {
		return MAX_LIGNE;
	}

	public static int getDefaultCol() {
		return DEFAULT_COL;
	}

	public static int getDefaultLigne() {
		return DEFAULT_LIGNE;
	}

	public void setCases(ArrayList<ArrayList<Case>> cases) {
		this.cases = cases;
	}
	
	
	/*private void matriceASCII(){
		//TODO
	}
	
	public static String printMatrix(String[][] matrix	,int sizeX ,int	sizeY){//affichage carte
		StringBuilder sb =new StringBuilder();
		@SuppressWarnings("resource")
		Formatter formatter =new Formatter(sb,Locale.FRENCH);
		String formatS 	="%1$5s";
		String[] valueTab =	new	String[sizeX+1];
		valueTab[0]="";
		for	(int index 	=	0;	index <	sizeX;index	++)	{
			formatS =formatS +	" %"+(index+2)+"$5s";
			valueTab[index+1]=	String.valueOf(index);
		}
		formatter.format(formatS +"\n",valueTab);
		formatter.format("%1$5s | %2$47s\n"	,"","_______________________________________________");
		for	(int i 	=0;i <sizeY	;i++){
			String formatS2 ="%1$5s | ";
			String[] valueTab2 	=new String	[sizeY+1];
			valueTab2[0]=String.valueOf(i);
			for(int j=0;j <sizeX;j++){
				formatS2 =formatS2 +" %"+(j +2)+"$5s";
				valueTab2[j+1]=matrix[i][j];
			}
			formatter.format(formatS2 +"\n",valueTab2);
		}
	return formatter.toString();
	}
	
	
	public String toString(){//affichage carte en console
		String ret = "Carte :\n";
		for(ArrayList<Case> ligne:cases){
			for(Case c:ligne){ret+=c+" | ";}
			ret+="\n";
		}
		return ret;
	}*/

}
