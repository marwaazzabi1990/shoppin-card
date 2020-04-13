window.onload =function(){
  /*  var login =document.getElementById("login").textContent;
    sessionStorage.setItem('login',login)
    console.log(login);*/
    //affichage de donnec dans la page avec getItem
document.getElementById('users').textContent= " Hello"+' '+ sessionStorage.getItem('login');
}