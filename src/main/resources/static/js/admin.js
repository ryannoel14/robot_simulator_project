var adId=null;

document.addEventListener("DOMContentLoaded",function(event){

	var xhr = new XMLHttpRequest(); 
	xhr.open("GET", '/state', true); 
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) { 
			var etat = JSON.parse(xhr.responseText);
			if(etat == true){  // on change la disposition de admin.html en fonction de l'état allumé/eteint du simulateur
				$('.btn').removeClass('play');
				$('.btn').addClass('pause');
				$('.btn').parent().removeClass('red-background');
				$('.btn').parent().addClass('green-background');
				$("h1").text("SIMULATOR IS RUNNING");

			}
		}
    }
	xhr.send(null);
	//faire en sorte de ne pas se connecter directement à admin.html soit accesible que si on est admin
	
	var url = new URL(window.location.href);
	var username=url.searchParams.get("username");
	var adminId=url.searchParams.get("adminId");
	
	if (username!=null || adminId !=null){
		var xhr2 = new XMLHttpRequest();
		xhr2.open("GET", '/username/'+username, true);  //on vérifie que l'id renvoyé par le username correspond bien
		console.log(username);
		xhr2.onreadystatechange = function() {
			
			if (xhr2.readyState == 4 && (xhr2.status == 200 || xhr2.status == 0)) {
				if(xhr2.responseText!=""){
					console.log(xhr2.response);
					adId = JSON.parse(xhr2.responseText);
					console.log(adId);
					console.log(adminId);
					var xhr3 = new XMLHttpRequest();
					xhr3.open("GET", '/admins/'+adminId, true);  //on vérifier que l'id renvoyé par adminId du signin.html correspond bien
					xhr3.onreadystatechange = function() {
						if (xhr3.readyState == 4 && (xhr3.status == 200 || xhr3.status == 0)) {
							if(xhr3.responseText!=""){
								var data = JSON.parse(xhr3.responseText);
								admId = data.admin_id;
								console.log(admId);
								sessionStorage.getItem("adminid");
								if (sessionStorage.getItem("adminid") == adId && sessionStorage.getItem("adminid") == admId){
									console.log("stay");
								}else{
									window.location.href = "/signin.html";
								}
							}else{
								window.location.href = "/signin.html";
							}
						}
					}	
					xhr3.send(null);
				}else{
					window.location.href = "/signin.html";
				}
					
			}
		}
		xhr2.send(null);
	}else{
		window.location.href = "/signin.html";
	}
	
});

//on change l'état du simulateur en appuyant sur le bouton
document.getElementsByClassName('btn play')[0].onclick = function(){

	var xhr = new XMLHttpRequest();
	xhr.open("GET", '/state', true); 
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
	
			var etat = JSON.parse(xhr.responseText);
			console.log(etat);
			if(etat == false) {
				console.log('play');
			   	var xhr2 = new XMLHttpRequest();
			   	xhr2.open("POST", '/state/true', true); 
				xhr2.setRequestHeader("Content-type", "application/json");
				xhr2.send(null); 
				
				
			}

			if(etat == true) {
				console.log('pause');
			   	var xhr3 = new XMLHttpRequest();
			   	xhr3.open("POST", '/state/false', true); 
				xhr3.setRequestHeader("Content-type", "application/json");
				xhr3.send(null);
			}
		}
	}
	xhr.send(null);
}

//on se déconnecte de la session admin en cliquant sur sign out
document.getElementById('sign-out').onclick = function(){
	
	var url = new URL(window.location.href);
	var adminId=url.searchParams.get("adminId");
	console.log(adminId);
	var xhr3 = new XMLHttpRequest();
   	xhr3.open("POST", '/signedin/'+adminId+'/false', true); 
	xhr3.setRequestHeader("Content-type", "application/json");
	xhr3.send(null);
	sessionStorage.removeItem("adminid");
	alert("Déconnecté");
	window.location.href="/signin.html";
	
}



