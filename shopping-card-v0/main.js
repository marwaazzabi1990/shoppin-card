var total=0
var art=[]
//selectioner les button d'achat
const order=document.querySelectorAll('.action-wrap');
//console.log(order);
//parcour et test si le bouton clicker pour faire ajout
for (let i=0;i<order.length;i++)
{
  let btn= order[i]
  btn.addEventListener('click',ajouter);

}

//function ajouter dans le panier


  function ajouter(event){
   
  //verifier le clique et le contenu
   let btnclicked= event.target
//retour au class parent
   const item=btnclicked.parentElement.parentElement.parentElement;
   //console.log(item);
   //selectionner le pris d'article selectionner
  const price=item.getElementsByClassName("price-new")[0].innerText;
  //couper que le chifre prener aavec la fonction trim
  let finalPrice=price.slice(1).trim();
  //console.log(finalPrice)

  
  let totalFacture=parseFloat(finalPrice)
  //ajouter dans un tableau
  art.push(finalPrice);
    //calculer la somme 
  total=total+ totalFacture
  //calculer nb d'article
let nb=art.length
  //var nb=item.length();
  
  console.log(total)
  console.log(nb)
  //const finalMoney=totalMoney.toFixed(2);
  document.getElementById("item-total").textContent=total;
  document.getElementById("item-count").textContent=nb;
  alert('do you want to add this item to your cart?');

    console.log("its clicked")

  }
  function vider(){
    var list =document.getElementById('item-count')
    document.getElementById("item-total").textContent=0;
    document.getElementById("item-count").textContent=0;
}





  
   