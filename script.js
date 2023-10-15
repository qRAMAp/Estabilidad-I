// Desarrollo por Lassalle Ramiro para la catedra de estabilidad I de ing.Mecanica de la UTN Facultad Regional Córdoba //
let altura = "";
let peso = "";
let eje = "";
var h;
var tita;
var cad;
var fCC;
var fCB;
var fBB;
var fAB;
var fAA;
var fAy;



function transformar(){
    if (eje == "Delantera"){                    
        peso = peso*0.65/2}                     
// Si la rueda que queremos levantar es la Delantera, el peso se multiplicará por 0.65 suponiendo un vehiculo 
// cuya distribución de peso sea 65% en el eje delantero y 35% detrás. luego divide entre dos porque solo levantamos una rueda

    else {peso = peso*0.35/2};   // Si la rueda que queremos levantar es la Trasera, el peso se multiplicará por 0.35 y luego divide entre dos.

    h = altura + 13.5;  
// A la altura ingresada se le suman 20cm que corresponden al vehiculo apoyado en sus ruedas 
// y se restan 6.5cm correspondientes a la base y al soporte del gato (partes no móviles) 13.5cm totales.

    tita = Math.asin(h/40); // obtenemos el ángulo tita, en base a la altura deseada y al largo de dos brazos móviles 
    console.log(peso, h);
}

function calcularPines(){
    // Calculamos las fuerzas que actúan en el pin "C" //
    fCB = (peso/4)/Math.sin(tita);
    fCC= fCB * Math.cos(tita);

    // Calculamos las fuerzas que actúan en el pin "B" //
    fAB = fCB;                   // Como -fCBy + fABy = 0 ----> |fCB| = |fAB| //
    fBB = 2*fCB*Math.cos(tita);

    // Calculamos las fuerzas que actúan en el pin "A" //
    fAA = fCC;                  // Como fAA = fAB.cos(tita) , fCC = fCB.cos(tita) y fAB = fCB ----> fAA = fCC //
    fAy = peso/4;               //Como fAy = fAB.sen(tita) , fCB = (peso/4)/sen(tita) y fAB = fCB ----> fAy = peso/4 //

    console.log(tita, fCB , fCC, fAB, fBB, fAA, fAy);
    document.getElementById("fCB").innerHTML ="La fuerza en la barra CB es: <b>" + Math.round(fCB * 1000)/1000 +" Kg</b>";
    document.getElementById("fCC").innerHTML ="La fuerza en la barra CC es: <b>" + Math.round(fCC * 1000)/1000 +" Kg</b>";
    document.getElementById("fAB").innerHTML ="La fuerza en la barra AB es: <b>" + Math.round(fAB * 1000)/1000 +" Kg</b>";
    document.getElementById("fBB").innerHTML ="La fuerza en la barra BB es: <b>" + Math.round(fBB * 1000)/1000 +" Kg</b>";
    document.getElementById("fAA").innerHTML ="La fuerza de la reaccion AA es: <b>" + Math.round(fAA * 1000)/1000 +" Kg</b>";
    document.getElementById("fAy").innerHTML ="La fuerza de la reaccion Ay es: <b>" + Math.round(fAy * 1000)/1000 +" Kg</b>";
    //Con Math.round redondeamos el valor de la fuerza.
    //Multiplicando por 1000 y dividiendo FUERA DEL PARENTESIS por 1000 limitamos la cantidad de decimales (el numero de ceros equivale al numero de decimales)
}



function datos(){
    altura = Number(document.getElementById("altura").value);
    peso = Number(document.getElementById("peso").value);        // Obtenemos los datos ingresados por el usuario para hacer uso mas adelante.
    eje = document.getElementById("eje").value;
    console.log(peso, altura, eje);
        
        if (altura=="" || peso==""){                            // Validación para datos no completados.
        alert("Por favor rellene los datos");
    }
        if (peso>2500 || peso<0 || altura<0 || altura>25){      // Validación simple para que los datos esten dentro de los parámetros
        alert("Solo valores positivos; hasta 2500kg y 25cm");   // admitidos por el gato.
    }
        else{
    transformar();
    calcularPines();
    }
}

