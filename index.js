function getIMC(){
  var peso=parseFloat(document.getElementById('peso').value);
  var altura=parseFloat(document.getElementById('altura').value);
  var imc=peso/(altura*altura);
  document.getElementById("imc").innerHTML=imc;
  if (imc<=18.50){
    resultado="Es bajo peso";}
    else
     if (imc>=16.00 && imc<=16.99){
     resultado="Delgadez severa";}
    else
    if (imc>=17.00 && imc<=18.49){
     resultado="Delgadez severa";} 
}
