/*function passer() {

    var li = document.createElement("p");//crer le element de html//
    var inputValue = document.getElementById("login").value;//selectionner le contenu de element html a le id //
    var t = document.createTextNode(inputValue);
    console.log(t)
    li.appendChild(t);
    console.log(li)
    if (inputValue === '') {
    alert("Entrer la tache a réaliser!");
    } else {
    // const user= document.getElementById("mes_taches").appendChild(li);
     const str1='hello'
     console.log(str1.concat(' ',inputValue));
     document.getElementById("users").textContent= str1.concat(' ',inputValue);

    

    }
}
*/


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

