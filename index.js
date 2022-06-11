// SELECCION TC 

let tc =  prompt("COMO QUIERES PAGAR? visa-mastercard-american express?");

if ((tc === "visa") || (tc === "VISA")) {
    alert("USTED SELECCIONO VISA");
}
else if ((tc === "mastercard") || (tc === "MASTERCARD")){
    alert("USTED SELECCIONO MASTERCARD");
}
else if ((tc === "american express") || (tc === "AMERICAN EXPRESS")){
     alert("USTED SELECCIONO AMERICAN EXPRESS")   
}
else {
    alert("TARJETA INVALIDA");
}


// MONTO - CUOTAS 

const calculo = (cuota) => cuota /seleccion;
let seleccion = prompt("SELECCIONAR CUOTAS  3 CUOTAS   6 CUOTAS  12 CUOTAS ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "3":
        alert("TARJETA" + " " + tc + " " + "CUOTAS" + " " + seleccion + " " + " VALOR CUOTA" + " " + calculo(valor)) ;
        break;
    case "6":
        alert("TARJETA" + " " + tc + " " + "CUOTAS" + " " + seleccion + " " + " VALOR CUOTA" + " " + calculo(valor));
        break;
    case "12":
        alert("TARJETA" + " " + tc + " " + "CUOTAS" + " " + seleccion + " " + " VALOR CUOTA" + " " + calculo(valor));
        break;    
    default:
        break;
    }

    
  
    


