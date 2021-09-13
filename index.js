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
  if (imc>=17.00 && imc<=18.49){resultado="Delgadez aceptable";}
    else
    if (imc>=18.58 && imc<=24.99){resultado="Normal";}
    else
    if (imc<=25.00){resultado="Sobre peso";}
    else
    if (imc>=25.00 && imc<=29.99){resultado="Pre-obeso (riesgo)";}
    else
    if (imc>=30.00){resultado="obeso";}
      else
      if (imc>=30.00 && imc<=34.99){resultado="obeso tipo I (riesgo moderado)";}
      else
      if (imc>=35.00 && imc<=39.99){resultado="obeso tipo II (riesgo severo)";}
      if (imc>=40.00){resultado="obeso tipo III (riesgo muy severo)";}
      alert(resultado); 
}
