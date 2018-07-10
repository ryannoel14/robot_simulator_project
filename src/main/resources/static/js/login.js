function login(){
	
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var Id = null;
    var Idd = null;

    //vérification de l'existence de l'utilisateur dans la base de données
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/login', true);
    xhr.setRequestHeader("Content-type", "application/json");
    var data = JSON.stringify({"username":String(username),"password":String(password)});
    xhr.send(data);
    
    xhr.addEventListener('readystatechange',function(){
		if(xhr.readyState===4 && xhr.status ===200){	
			
			if(xhr.responseText=="true"){
				//récupèration de l'id de l'utilisateur
	        		var xhr2 = new XMLHttpRequest();
	            	xhr2.open("GET", '/username/'+username,true);
	            	xhr2.onreadystatechange = function() {
	                if (xhr2.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
						alert("Connecté");
		            	Id = JSON.parse(xhr2.responseText);
						window.location.href="/admin.html?adminId="+Id+"&username="+username;
	                }
	            };
	            xhr2.send(null);
			}
			else{
				alert("Le nom d'utilisateur ou le mot de passe est incorrect");
			}
		}
		
	
	});
   
    var xhr3 = new XMLHttpRequest();
	xhr3.open("GET", '/username/'+ username, true); 
	xhr3.onreadystatechange = function() {
	
        if (xhr3.readyState == 4 && (xhr3.status == 200 || xhr3.status == 0)) {
        	console.log(xhr3.responseText)
        	Idd = JSON.parse(xhr3.responseText);
        	console.log(Idd);
        	sessionStorage.setItem("adminid",Idd);
        	var xhr4 = new XMLHttpRequest();
        	xhr4.open("POST", '/signedin/'+Idd+'/true', true); //on change l'état de connexion d'admin
        	xhr4.setRequestHeader("Content-type", "application/json");
        	xhr4.send(null);
  
        }
        
	};
	xhr3.send(null); 

	
    
}

