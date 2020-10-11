// alert("Hola Mundo");
// alert("Adios Mundo");
// var hola='HOlAMUNDO';

var articulos=["pantalones", "blusas", "calcetines","shorts"];



var num=4;
var num2=0;
var resultado=0;


//alert('hola mundo');


//ciclo for 
	// for(i =0; i <= articulos.length -1; i++){
	// document.write( articulos[i] + "<br>");

 //    }


 //ciclo while

// var artiC= articulos.length-1;

// var i=0;

//   while( i <= artiC){
  	
//   	document.write( articulos[i] +"<br>");

//   	i++; 
//   }


  ///funciones

  // function saludo(){
  // 	document.write('hola mundo');
  // }

  // saludo();

var num1=10;
var num2=15;

// function suma (){
// 	return resultado = num1 + num2;
// }
// document.write(suma());

 // function numeroMaximo(){
 // 	if(num1 > num2){
 // 		return num1;
 // 	}
 // 	else{
 // 		return num2;
 // 	}

 // }

 // document.write(numeroMaximo());

var suma = function(numero1, numero2){
	numero1= parseFloat(document.getElementById('num1').value);
	numero2=parseFloat(document.getElementById('num2').value);

	var resultado = numero1 + numero2;

	return resultado;

	
}




// function sumar(){
// 	// body...
// this.resultado= this.num + this.num2;

// alert('hola');
// }


// 	var desayuno=false;


// if (desayuno == true){
// 	alert("vamos a desayunar");
// }else{
// 	alert("Ni lo pienses");
// }


// var articulos=now Array("blusa", "refresco", "alcohol");
