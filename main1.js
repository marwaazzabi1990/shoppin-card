


//console.log((document.forms["connexion"]["Username"]));
//recuperation des donnes saisi et creation de session
 function result(){
     var login =document.getElementById('login').value;
     var password=document.getElementById('password').value;
     console.log(login)
     //sauvgarde staurige
     sessionStorage.setItem('login',login);
     sessionStorage.setItem('pwd',password)
 }
 //afficher le login d'utilisateur dans page d'achat



/*
document.forms["connexion"].addEventListener("submit",function(e){
  
    var erreur;
    var inputs=this ;//document.getElementsByTagName("input");
    for(let i=0;i<inputs.length;i++)
    {
        //tratement cas par cas
      /*  if(inputs[login].value !="mm@gmail.com")
        {
            erreur="mm incorect"
        }
 
        console.log(inputs[i]);
        if(!inputs[i].value)
        {
            erreur="Veuillez renseigner tous les champs";
        }
    }


    if(erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML=erreur;
        return false
    }
    else{
        alert('formulaire envoyer');

    }
    /*var login=document.getElementById("login");
    var password=document.getElementById("password");
  
    if(!password.value){
        erreur="Veuillez renseigner un votre password";
    }
    if(!login.value){
        erreur="Veuillez renseigner un login";
    }
    if(erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML=erreur;
        return false
    }
    else{
        alert('formulaire envoyer');

    }*/

