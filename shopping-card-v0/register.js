
    
    function result(){

      

  
        var login =document.getElementById('login').value;
       // var password=document.getElementById('password').value;
        console.log(login)
        //sauvgarde staurige
        sessionStorage.setItem('login',login);
        //sessionStorage.setItem('pwd',password)
}