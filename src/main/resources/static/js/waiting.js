var head_queue=null;
var Idd;
var Id;
var uniqueIdd;

document.addEventListener("DOMContentLoaded",function(event){
	
	var uniqueId = Math.random().toString(36).substr(2, 16);
	var data = JSON.stringify({"uniqueId":uniqueId});
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", '/users', true); 
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(data); //on crée un user associé a la page waiting
	
	sessionStorage.setItem("id",uniqueId); //la session Storage id est celui de l'utilisateur crée
	var wait = function(){
		setInterval(function(){
	    	var xhr2 = new XMLHttpRequest();
			xhr2.open("GET", '/users', true);
			xhr2.onreadystatechange = function() {
		        if (xhr2.readyState == 4 && (xhr2.status == 200 || xhr2.status == 0)) {
		        	
		        	var queue = JSON.parse(xhr2.responseText);
		        	head_queue = queue[0].uniqueId;
		        	Id = queue[0].user_id;
		        	
		        	for (var i =0; i <queue.length;i++){
		        		if(queue[i].uniqueId == sessionStorage.getItem("id")){
		        			Idd = queue[i].user_id;
		        			uniqueIdd = queue[i].uniqueId;
		        		}
		        	}
		     	
					var xhr3 = new XMLHttpRequest();
					xhr3.open("GET", '/state', true); 
					xhr3.onreadystatechange = function() {
						if (xhr3.readyState == 4 && (xhr3.status == 200 || xhr3.status == 0)) {
							
							var etat = JSON.parse(xhr3.responseText);
							if((uniqueIdd == head_queue) && etat==true){ // si l'unique Id de la waiting page est la meme que la head_queue alors on est redirigé vers cmd.html
					    			sessionStorage.setItem("id",head_queue); //l'id de la session devient head_queue
								
									window.location.href = "/cmd.html";
					    		}else{
					    			
					    		}
							}
						}
					xhr3.send(null);
		        }
		        }
		    xhr2.send(null);
	    },2000);
	
		}
		setTimeout(wait,2000);
});

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
    
    var confirmClose = confirm('Vous allez accéder au simulateur');
    return confirmClose;
} 


