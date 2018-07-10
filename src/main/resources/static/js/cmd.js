var Id=null;
var Idd=null;
var head_queue=null;
var etat=null;
var uniqueIdd;

document.addEventListener("DOMContentLoaded",function(event){
	
		setTimeout(function(){ 
			var loader = document.getElementsByClassName("spinner-container")[0];
			var page = document.getElementsByClassName("container-fluid")[0];
			page.classList.remove("no-display");
			loader.classList.add("no-display");
		}, 1000);
		
		var uniqueId = Math.random().toString(36).substr(2, 16); //on genere un id unique
		var data = JSON.stringify({"uniqueId":uniqueId});
		
		var xhr = new XMLHttpRequest(); // requete qui ajoute un user dans la bdd
		xhr.open("POST", '/users', true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(data); 
		
		
		sessionStorage.setItem("id",uniqueId); //on enregistre l'id unique dans la session storage
	
		
		var checkStatus =  function(){ //après 200ms
			
			var xhr2 = new XMLHttpRequest();
			xhr2.open("GET", '/users', true); //on recupere les données des users
			xhr2.onreadystatechange = function() {
		        if (xhr2.readyState == 4 && (xhr2.status == 200 || xhr2.status == 0)) {
		        	
		        	var queue = JSON.parse(xhr2.responseText);
		        	head_queue = queue[0].uniqueId; // l'unique Id du premier user dans la bdd est le head_queue
		        	Id = queue[0].user_id; //on récupère son id
		        	
		        	
		        	for (var i =0; i <queue.length;i++){
		        		if(queue[i].uniqueId == sessionStorage.getItem("id")){
		        			Idd = queue[i].user_id; //l'Id de l'user associé à un unique Id
		        			uniqueIdd = queue[i].uniqueId;
		        		}
		        	}
				
				setInterval(function(){
					var xhr3 = new XMLHttpRequest();
					xhr3.open("GET", '/state', true); 
					xhr3.onreadystatechange = function() {
						if (xhr3.readyState == 4 && (xhr3.status == 200 || xhr3.status == 0)) {
	
							etat = JSON.parse(xhr3.responseText);
							if((uniqueIdd != head_queue) || (etat ==false)){ //si l'unique Id ne correspond pas à celui du head_queue alors on est redirigé vers waiting.html 
									//alert("you are beign redirected");
									
									window.location.href = "/waiting.html";
									
					    		}else{
					    			
					    		}
						}
					}	
					xhr3.send(null);
				},200);
					        
		        }
		    };
		    xhr2.send(null);
	    }
	    setTimeout(checkStatus,1000);		
	    
});

/*window.addEventListener("beforeunload", function (e) { //lorsque l'on ferme la page, le tab, on remove l'id de la session storage et on delete le user de la bdd
	  
	  
	  //sessionStorage.removeItem("id");
	  var xhr3 = new XMLHttpRequest();
	  xhr3.open("DELETE", '/users/'+Idd, true);
	  xhr3.send(null);
	  
  });*/
/*
window.onbeforeunload = function (e) {
	  var e = e || window.event;

	  // For IE and Firefox
	  if (e) {
		  sessionStorage.removeItem("id");
		  var xhr3 = new XMLHttpRequest(); //on supprime l'utilisateur associé 
		  xhr3.open("DELETE", '/users/'+Idd, true);
		  xhr3.send(null);
	  }

};*/

/*
window.addEventListener("beforeunload", function (e) {
	  
	  sessionStorage.removeItem("id");
	  var xhr3 = new XMLHttpRequest(); //on supprime l'utilisateur associé 
	  xhr3.open("DELETE", '/users/'+Idd, true);
	  xhr3.send(null);

});*/
	
window.onbeforeunload = confirmWinClose;
function confirmWinClose() {
	  
	  	
	  //sessionStorage.removeItem("id");
	  var xhr3 = new XMLHttpRequest(); //on supprime l'utilisateur associé 
	  xhr3.open("DELETE", '/users/'+Idd, true);
	  xhr3.send(null);
	  
	  var confirmClose = confirm('Close?');
	  return confirmClose;
	  
} 

