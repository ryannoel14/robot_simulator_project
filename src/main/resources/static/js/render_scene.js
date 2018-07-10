import {MapMng} from './MapMng.js';

/*** Display Management ***/
var displayRobot = document.getElementById('myonoffswitch');
var displayPath = document.getElementById('myonoffswitch2');
var displayObstacles = document.getElementById('myonoffswitch3');
var autoMapping = document.getElementById('myonoffswitch4');

$(function() {
  var c = $("canvas")[0].getContext("2d");
  let mapMng=new MapMng(c,[]);

  var obj =  null;

  
  function maj(){

  $.ajax ({
  success: function (data) {
         	
	  obj = '{'
		     +'"height" : '+10+','
		     +'"infinite":false,'
		     +'"layers":['
		     +'{'
		                       +'"data"  : ['+data+'],'
		           	   +'"height" : '+10+','
		           	   +'"id" : 1,'
		               +'"name":"background",'
		               +'"opacity":1,'
		               +'"type":"tilelayer",'
		               +'"visible":true,'
		               +'"width" : '+10+','
		               +'"x":0,'
		               +'"y":0'
		         	   +'}'
		         +'],'
		         +'"nextobjectid":1,'
		         +'"orientation":"orthogonal",'
		         +'"renderorder":"left-up",'
		         +'"tiledversion":"1.1.5",'
		         +'"tileheight":64,'
		         +'"tilesets":['
		         +'{'
		         	+'"columns":0,'
		         	+'"firstgid":1,'
		         	+'"grid":'
		         	+'{'
		         	+'"height":1,'
		         	+'"orientation":"orthogonal",'
		         	+'"width":1'
		         	+'},'
		         	+'"margin":0,'
		         	+'"name":"elts",'
		         	+'"spacing":0,'
		         	+'"tilecount":188,'
		         	+'"tileheight":64,'
		         	+'"tiles":'
		         	+'{'    
		             	+'"0":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_114.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		               	+'"1":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		              +'"2":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_136.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		             	+'"3":'
		         	+'{'
		         	+'"image":"",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'}'
		         	+'}'
		         	+'}],'
		         	+'"tilewidth":64,'
		         	+'"type":"map",'
		         	+'"version":1,'
		         	+'"width":'+10
		         +'}';
	  
	  		/*** Si bouton indiquant que on affiche pas le robot, alors on affiche plus son image ***/
		    if(displayRobot.checked == false && displayObstacles.checked==true && displayPath.checked==true){
		    	
		    	/*console.log(JSON.parse(obj).tilesets[0].tiles[2]);
		        JSON.parse(obj).tilesets[0].tiles[2].image = " ";
		    	console.log(JSON.parse(obj).tilesets[0].tiles[2]);*/


		    	obj = '{'
				     +'"height" : '+10+','
				     +'"infinite":false,'
				     +'"layers":['
				     +'{'
				                       +'"data"  : ['+data+'],'
				           	   +'"height" : '+10+','
				           	   +'"id" : 1,'
				               +'"name":"background",'
				               +'"opacity":1,'
				               +'"type":"tilelayer",'
				               +'"visible":true,'
				               +'"width" : '+10+','
				               +'"x":0,'
				               +'"y":0'
				         	   +'}'
				         +'],'
				         +'"nextlauyerid":6,'
				         +'"nextobjectid":1,'
				         +'"orientation":"orthogonal",'
				         +'"renderorder":"left-up",'
				         +'"tiledversion":"1.1.5",'
				         +'"tileheight":64,'
				         +'"tilesets":['
				         +'{'
				         	+'"columns":0,'
				         	+'"firstgid":1,'
				         	+'"grid":'
				         	+'{'
				         	+'"height":1,'
				         	+'"orientation":"orthogonal",'
				         	+'"width":1'
				         	+'},'
				         	+'"margin":0,'
				         	+'"name":"ground",'
				         	+'"spacing":0,'
				         	+'"tilecount":188,'
				         	+'"tileheight":64,'
				         	+'"tiles":'
				         	+'{'    
				             	+'"0":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_114.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				               	+'"1":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'   
				         	+'"imagewidth":64'
				         	+'},'
				              +'"2":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				             	+'"3":'
				         	+'{'
				         	+'"image":"",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'}'
				         	+'},'
				         	+'"tilewidth":64'
				         	+'}],'
				         	+'"tilewidth":64,'
				         	+'"type":"map",'
				         	+'"version":1,'
				         	+'"width":'+10
				         +'}';		    	
			} 
		     
		     /*** On affiche pas les obstacles seulement  ***/
		    if(displayObstacles.checked==false && displayPath.checked==true && displayRobot.checked==true){
		    	  obj = '{'
		     +'"height" : '+10+','
		     +'"infinite":false,'
		     +'"layers":['
		     +'{'
		                       +'"data"  : ['+data+'],'
		           	   +'"height" : '+10+','
		           	   +'"id" : 1,'
		               +'"name":"background",'
		               +'"opacity":1,'
		               +'"type":"tilelayer",'
		               +'"visible":true,'
		               +'"width" : '+10+','
		               +'"x":0,'
		               +'"y":0'
		         	   +'}'
		         +'],'
		         +'"nextobjectid":1,'
		         +'"orientation":"orthogonal",'
		         +'"renderorder":"left-up",'
		         +'"tiledversion":"1.1.5",'
		         +'"tileheight":64,'
		         +'"tilesets":['
		         +'{'
		         	+'"columns":0,'
		         	+'"firstgid":1,'
		         	+'"grid":'
		         	+'{'
		         	+'"height":1,'
		         	+'"orientation":"orthogonal",'
		         	+'"width":1'
		         	+'},'
		         	+'"margin":0,'
		         	+'"name":"elts",'
		         	+'"spacing":0,'
		         	+'"tilecount":188,'
		         	+'"tileheight":64,'
		         	+'"tiles":'
		         	+'{'    
		             	+'"0":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		               	+'"1":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		              +'"2":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_136.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		             	+'"3":'
		         	+'{'
		         	+'"image":"",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'}'
		         	+'}'
		         	+'}],'
		         	+'"tilewidth":64,'
		         	+'"type":"map",'
		         	+'"version":1,'
		         	+'"width":'+10
		         +'}';
		    } 
		  
		  	/*** On affiche pas le chemin seulement  ***/
		    if(displayPath.checked == false && displayObstacles.checked==true && displayRobot.checked==true){
		    	obj = '{'
		     +'"height" : '+10+','
		     +'"infinite":false,'
		     +'"layers":['
		     +'{'
		                       +'"data"  : ['+data+'],'
		           	   +'"height" : '+10+','
		           	   +'"id" : 1,'
		               +'"name":"background",'
		               +'"opacity":1,'
		               +'"type":"tilelayer",'
		               +'"visible":true,'
		               +'"width" : '+10+','
		               +'"x":0,'
		               +'"y":0'
		         	   +'}'
		         +'],'
		         +'"nextobjectid":1,'
		         +'"orientation":"orthogonal",'
		         +'"renderorder":"left-up",'
		         +'"tiledversion":"1.1.5",'
		         +'"tileheight":64,'
		         +'"tilesets":['
		         +'{'
		         	+'"columns":0,'
		         	+'"firstgid":1,'
		         	+'"grid":'
		         	+'{'
		         	+'"height":1,'
		         	+'"orientation":"orthogonal",'
		         	+'"width":1'
		         	+'},'
		         	+'"margin":0,'
		         	+'"name":"elts",'
		         	+'"spacing":0,'
		         	+'"tilecount":188,'
		         	+'"tileheight":64,'
		         	+'"tiles":'
		         	+'{'
		         		+'"0":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_114.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'    
		             	+'"1":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		              +'"2":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_136.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'},'
		             	+'"3":'
		         	+'{'
		         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
		         	+'"imageheight":64,'
		         	+'"imagewidth":64'
		         	+'}'
		         	+'}'
		         	+'}],'
		         	+'"tilewidth":64,'
		         	+'"type":"map",'
		         	+'"version":1,'
		         	+'"width":'+10
		         +'}';
	  
	  		    }  

	  		    /*** On affiche ni le chemin ni les obstacles ****/
	  		    if(displayPath.checked == false && displayObstacles.checked==false && displayRobot.checked==true){
		    		 obj = '{'
				     +'"height" : '+10+','
				     +'"infinite":false,'
				     +'"layers":['
				     +'{'
				                       +'"data"  : ['+data+'],'
				           	   +'"height" : '+10+','
				           	   +'"id" : 1,'
				               +'"name":"background",'
				               +'"opacity":1,'
				               +'"type":"tilelayer",'
				               +'"visible":true,'
				               +'"width" : '+10+','
				               +'"x":0,'
				               +'"y":0'
				         	   +'}'
				         +'],'
				         +'"nextobjectid":1,'
				         +'"orientation":"orthogonal",'
				         +'"renderorder":"left-up",'
				         +'"tiledversion":"1.1.5",'
				         +'"tileheight":64,'
				         +'"tilesets":['
				         +'{'    
				         	+'"columns":0,'
				         	+'"firstgid":1,'
				         	+'"grid":'
				         	+'{'
				         	+'"height":1,'
				         	+'"orientation":"orthogonal",'
				         	+'"width":1'
				         	+'},'
				         	+'"margin":0,'
				         	+'"name":"elts",'
				         	+'"spacing":0,'                  
				         	+'"tilecount":188,'
				         	+'"tileheight":64,'
				         	+'"tiles":'
				         	+'{'    
				             	+'"0":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				               	+'"1":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				              +'"2":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_136.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				             	+'"3":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'}'
				         	+'}'
				         	+'}],'
				         	+'"tilewidth":64,'
				         	+'"type":"map",'
				         	+'"version":1,'
				         	+'"width":'+10
				         +'}';


	  		    }	

	  		    /*** On affiche ni les obstacles ni le robot ***/
	  		    if(displayPath.checked == true && displayObstacles.checked==false && displayRobot.checked==false){
	  		    		obj = '{'
					     +'"height" : '+10+','
					     +'"infinite":false,'
					     +'"layers":['
					     +'{'
					                       +'"data"  : ['+data+'],'
					           	   +'"height" : '+10+','
					           	   +'"id" : 1,'
					               +'"name":"background",'
					               +'"opacity":1,'
					               +'"type":"tilelayer",'
					               +'"visible":true,'
					               +'"width" : '+10+','
					               +'"x":0,'
					               +'"y":0'
					         	   +'}'
					         +'],'
					         +'"nextobjectid":1,'
					         +'"orientation":"orthogonal",'
					         +'"renderorder":"left-up",'
					         +'"tiledversion":"1.1.5",'
					         +'"tileheight":64,'
					         +'"tilesets":['
					         +'{'
					         	+'"columns":0,'
					         	+'"firstgid":1,'
					         	+'"grid":'
					         	+'{'
					         	+'"height":1,'
					         	+'"orientation":"orthogonal",'
					         	+'"width":1'
					         	+'},'
					         	+'"margin":0,'
					         	+'"name":"elts",'
					         	+'"spacing":0,'
					         	+'"tilecount":188,'
					         	+'"tileheight":64,'
					         	+'"tiles":'
					         	+'{'    
					             	+'"0":'
					         	+'{'
					         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'},'
					               	+'"1":'
					         	+'{'
					         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'},'
					              +'"2":'
					         	+'{'
					         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'},'
					             	+'"3":'
					         	+'{'
					         	+'"image":"",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'}'
					         	+'}'
					         	+'}],'
					         	+'"tilewidth":64,'
					         	+'"type":"map",'
					         	+'"version":1,'
					         	+'"width":'+10
					         +'}';


	  		    }	

	  		    /*** On affiche ni le chemin ni le robot ***/
	  		    if(displayPath.checked == false && displayObstacles.checked==true && displayRobot.checked==false){
	  		    		obj = '{'
				     +'"height" : '+10+','
				     +'"infinite":false,'
				     +'"layers":['
				     +'{'
				                       +'"data"  : ['+data+'],'
				           	   +'"height" : '+10+','
				           	   +'"id" : 1,'
				               +'"name":"background",'
				               +'"opacity":1,'
				               +'"type":"tilelayer",'
				               +'"visible":true,'
				               +'"width" : '+10+','
				               +'"x":0,'
				               +'"y":0'
				         	   +'}'
				         +'],'
				         +'"nextobjectid":1,'
				         +'"orientation":"orthogonal",'
				         +'"renderorder":"left-up",'
				         +'"tiledversion":"1.1.5",'
				         +'"tileheight":64,'
				         +'"tilesets":['
				         +'{'
				         	+'"columns":0,'
				         	+'"firstgid":1,'
				         	+'"grid":'
				         	+'{'
				         	+'"height":1,'
				         	+'"orientation":"orthogonal",'
				         	+'"width":1'
				         	+'},'
				         	+'"margin":0,'
				         	+'"name":"elts",'
				         	+'"spacing":0,'
				         	+'"tilecount":188,'
				         	+'"tileheight":64,'
				         	+'"tiles":'
				         	+'{'    
				             	+'"0":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_114.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				               	+'"1":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				              +'"2":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'},'
				             	+'"3":'
				         	+'{'
				         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
				         	+'"imageheight":64,'
				         	+'"imagewidth":64'
				         	+'}'
				         	+'}'
				         	+'}],'
				         	+'"tilewidth":64,'
				         	+'"type":"map",'
				         	+'"version":1,'
				         	+'"width":'+10
				         +'}';


	  		    }	

	  		    /*** On affiche ni le robot ni le chemin ni les obstacles ***/	
	  		    if(displayPath.checked == false && displayObstacles.checked==false && displayRobot.checked==false){
	  		    	
	  		    		obj = '{'
					     +'"height" : '+10+','
					     +'"infinite":false,'
					     +'"layers":['
					     +'{'
					                       +'"data"  : ['+data+'],'
					           	   +'"height" : '+10+','
					           	   +'"id" : 1,'
					               +'"name":"background",'
					               +'"opacity":1,'
					               +'"type":"tilelayer",'
					               +'"visible":true,'
					               +'"width" : '+10+','
					               +'"x":0,'
					               +'"y":0'
					         	   +'}'
					         +'],'
					         +'"nextobjectid":1,'
					         +'"orientation":"orthogonal",'
					         +'"renderorder":"left-up",'
					         +'"tiledversion":"1.1.5",'
					         +'"tileheight":64,'
					         +'"tilesets":['
					         +'{'
					         	+'"columns":0,'
					         	+'"firstgid":1,'
					         	+'"grid":'
					         	+'{'
					         	+'"height":1,'
					         	+'"orientation":"orthogonal",'
					         	+'"width":1'
					         	+'},'
					         	+'"margin":0,'
					         	+'"name":"elts",'
					         	+'"spacing":0,'
					         	+'"tilecount":188,'
					         	+'"tileheight":64,'
					         	+'"tiles":'
					         	+'{'    
					             	+'"0":'
					         	+'{'
					         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'},'
					               	+'"1":'
					         	+'{'
					         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'},'
					              +'"2":'
					         	+'{'
					         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'},'
					             	+'"3":'
					         	+'{'
					         	+'"image":"..\/img\/mapPack\/PNG\/mapTile_022.png",'
					         	+'"imageheight":64,'
					         	+'"imagewidth":64'
					         	+'}'
					         	+'}'
					         	+'}],'
					         	+'"tilewidth":64,'
					         	+'"type":"map",'
					         	+'"version":1,'
					         	+'"width":'+10
					         +'}';

	  		    }	


		    mapMng.loadTileset(JSON.parse(obj));
		    
		    setTimeout(function() { 
  			  mapMng.scale_factor=1.8;
  			  mapMng.rerenderall();   
  			  }, 100);
  		 }
      ,
      failure: function(errMsg) {
          alert(errMsg);
      },
      type: "GET",
      url: "/envRobot",

  });   

}

maj();

    
  $(document).on('input change', '#scaleButtonId', function() {
    var current_val=$("#scaleButtonId")[0].value;
    mapMng.scale_factor=current_val;

    mapMng.rerenderall();  
  });


  window.chartColors = {
			red: 'rgb(255, 99, 132)',
			orange: 'rgb(255, 159, 64)',
			yellow: 'rgb(255, 205, 86)',
			green: 'rgb(75, 192, 192)',
			blue: 'rgb(54, 162, 235)',
			purple: 'rgb(153, 102, 255)',
			grey: 'rgb(201, 203, 207)'
		};

		var ctx = document.getElementById("myChart").getContext('2d');
				var myChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: ['0'],
						datasets: [{
							label: "Number of obstacles detected",
							backgroundColor: window.chartColors.red,
							borderColor: window.chartColors.red,
							data: [
								0
							],
							fill: false,
						}, {
							label: "Number of obstacles visible",
							fill: false,
							backgroundColor: window.chartColors.blue,
							borderColor: window.chartColors.blue,
							data: [
								0
							],
						}]
					},
					options: {
						responsive: true,
						title: {
							display: true,
							text: 'Obstacles'
						},
						tooltips: {
							mode: 'index',
							intersect: false,
						},
						hover: {
							mode: 'nearest',
							intersect: true
						},
						scales: {
							xAxes: [{
								display: true,
								ticks:{
									min:0,
									max:10
								},
								scaleLabel: {
									display: true,
									labelString: 'Commands executed'
								}
							}],
							yAxes: [{
								display: true,
								ticks:{
									min:0,
									max:10
								},
								scaleLabel: {
									display: true,
									labelString: 'Value'
								}
							}]
						}
					}
				});
			
			var ctx2 = document.getElementById("myChart2").getContext('2d');
				var myChart2 = new Chart(ctx2, {
					type: 'line',
					data: {
						labels: [0],
						datasets: [ {
							label: "Distance travelled",
							fill: false,
							backgroundColor: window.chartColors.blue,
							borderColor: window.chartColors.blue,
							data: [
								0
							],
						}]
					},
					options: {
						responsive: true,
						title: {
							display: true,
							text: 'Distance travelled'
						},
						tooltips: {
							mode: 'index',
							intersect: false,
						},
						hover: {
							mode: 'nearest',
							intersect: true
						},
						scales: {
							xAxes: [{
								display: true,
								ticks:{
									min:0,
									max:10
								},
								scaleLabel: {
									display: true,
									labelString: 'Commands executed'
								}
							}],
							yAxes: [{
								display: true,
								ticks:{
									min:0,
									max:10
								},
								scaleLabel: {
									display: true,
									labelString: 'Value'
								}
							}]
						}
					}
				});
				
  	
  function updateCharts(){
	var xhr = new XMLHttpRequest(); 
	xhr.open("GET", '/measures', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(null);
	
	xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        	var measures = JSON.parse(xhr.responseText);
        	console.log(measures)
        	myChart.options.scales.yAxes[0].ticks.max = measures.nbrObsRenc;
            myChart.data.datasets[0].data.push(measures.nbrObsRenc);
        	myChart.data.datasets[1].data.push(measures.nbrObsVis);
    		myChart.data.labels.push(measures.nbrCmbExecut);
    		myChart.options.scales.xAxes[0].ticks.max = measures.nbrCmbExecut;
    		
    		myChart.update();
    		
    		myChart2.data.labels.push(measures.nbrCmbExecut);
    		myChart2.options.scales.xAxes[0].ticks.max = measures.nbrCmbExecut;
    		myChart2.options.scales.yAxes[0].ticks.max = measures.distParcour;
    		myChart2.data.datasets[0].data.push(measures.distParcour);
    		
    		myChart2.update();
        }
	 }    			
  }
				
	
	function moveUp(){
		var xhr = new XMLHttpRequest(); 
		xhr.open("POST", '/cmd/up', false);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(null); 
		maj();  
		updateCharts();
	}

	function moveDown(){
		var xhr = new XMLHttpRequest(); 
		xhr.open("POST", '/cmd/down', false);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(null); 
		maj();  
		updateCharts();
	}

	function moveLeft(){
		var xhr = new XMLHttpRequest(); 
		xhr.open("POST", '/cmd/left', false);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(null); 
		maj();  
		updateCharts();
	}

	function moveRight(){
		var xhr = new XMLHttpRequest(); 
		xhr.open("POST", '/cmd/right', false);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(null); 
		maj();  
		updateCharts();
	}


	
 
	/*** Display Management ***/


	var displayRobot = document.getElementById('myonoffswitch');
	var displayPath = document.getElementById('myonoffswitch2');
	var displayObstacles = document.getElementById('myonoffswitch3');
	var autoMapping = document.getElementById('myonoffswitch4');


	displayRobot.onchange = function(){
		maj();
	}

	displayPath.onchange = function(){
		maj();
	}
	displayObstacles.onchange = function(){
		maj();
	}
  
	autoMapping.onchange = function(){
		
		if(autoMapping.checked == true){
			
				  //var nbrCasesDecouvertes = 0;
				  
			function auto(){
				if ( typeof auto.move == 'undefined' ) {
			        auto.move =  function(){
			        	var xhr = new XMLHttpRequest(); 
						xhr.open("POST", '/cmd/down', false);
						xhr.setRequestHeader("Content-type", "application/json");
						xhr.send(null);
						var success = JSON.parse(xhr.responseText); 
						var ret;
						if (success == true) {
							maj();  
							ret= true;
						}else{
							ret = false;
						}
						updateCharts();
						return ret;
						
			        }
			    }
			    var ret = auto.move();
			    return ret;

			    }
					  
			var	autoMode = setInterval(function(){ 
					
					
					var tirage;

					if(autoMapping.checked == true){

						var success = auto();
						
						if(success == false){

							tirage = Math.round(Math.random() *3);
							console.log("tirage:"+tirage);
							if(tirage==0){
								moveUp();
								auto.move = function(){
			        				var xhr = new XMLHttpRequest(); 
									xhr.open("POST", '/cmd/up', false);
									xhr.setRequestHeader("Content-type", "application/json");
									xhr.send(null);
									var success = JSON.parse(xhr.responseText); 
									var ret;
									if (success == true) {
										maj();  
										ret= true;
									}else{
										ret = false;
									}
									updateCharts();
									return ret;
			        			}

			        		}else if(tirage==1){
			        			moveDown();
			        			auto.move = function(){
			        				var xhr = new XMLHttpRequest(); 
									xhr.open("POST", '/cmd/down', false);
									xhr.setRequestHeader("Content-type", "application/json");
									xhr.send(null);
									var success = JSON.parse(xhr.responseText); 
									var ret;
									if (success == true) {
										maj();  
										ret= true;
									}else{
										ret = false;
									}
									updateCharts();
									return ret;
						        }

			        		}else if(tirage==2){
			        			moveLeft();
			        			auto.move = function(){
			        				var xhr = new XMLHttpRequest(); 
									xhr.open("POST", '/cmd/left', false);
									xhr.setRequestHeader("Content-type", "application/json");
									xhr.send(null);
									var success = JSON.parse(xhr.responseText); 
									var ret;
									if (success == true) {
										maj();  
										ret= true;
									}else{
										ret = false;
									}
									updateCharts();
									return ret;
			        			}

			        		}else{
			        			moveRight();
			        			auto.move = function(){
			        				var xhr = new XMLHttpRequest(); 
									xhr.open("POST", '/cmd/right', false);
									xhr.setRequestHeader("Content-type", "application/json");
									xhr.send(null);
									var success = JSON.parse(xhr.responseText); 
									var ret;
									if (success == true) {
										maj();  
										ret= true;
									}else{
										ret = false;
									}
									updateCharts();
									return ret;
			        			}
			        		}

							
							
						}
						
					}else{
						console.log(clearInterval(autoMode));
					}
				         
				
				 }, 1000);
				  
		}else{
			console.log(clearInterval(autoMode));
		}
	}

	

	/*** Gestion déplacements ***/

	var up = document.getElementsByClassName('arrow-top')[0];
	var down = document.getElementsByClassName('arrow-bottom')[0];
	var left = document.getElementsByClassName('arrow-left')[0];
	var right = document.getElementsByClassName('arrow-right')[0];

	up.onclick = function() {
		if(autoMapping.checked == false){	
			moveUp();
		}	
		
	}

	down.onclick = function(){
		if(autoMapping.checked == false){
			moveDown();
		}
		
	}

	left.onclick = function(){
		if(autoMapping.checked == false){
			moveLeft();
		}
		
	}

	right.onclick = function(){
		if(autoMapping.checked == false){
			moveRight();
		}
	
	}


});


