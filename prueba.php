<!DOCTYPE html>
<html>
<head>
	<title>Pruba con php</title>
</head>
<body>
<!-- También habría que validar en el ordenador del usuario mediante JavaScript -->
        <form name="frmPrueba" method="post" action="03_form3.php" >
            Nombre(*):    <input type="text" name="txtNombre" id="txt1" />
            Apellidos(*): <input type="text" name="txtApellidos" id="txt2" />
            Edad:         <input type="text" name="txtEdad" id="txt3" size="3" maxlength="2" /><p/>
            Nivel de inglés:
            <input type="radio" name="radIngles" value="BAJO" /> Bajo
            <input type="radio" name="radIngles" value="MEDIO" /> Medio
            <input type="radio" name="radIngles" value="ALTO" /> Alto<p/>
            <input type="checkbox" name="chkCoche" value="1" /> ¿Coche?<p/>
            <input type="submit" name="btnEnviar" value="Enviar Formulario" />
        </form>

     <?php
     $nombre="eric";

     // array ejemplo indicsado 1

     // $semana[0]="lunes";
     //   $semana[1]="Martes";
     //     $semana[2]="jueves";
     //     $semana[3]="viernes";

         // for ($i=0; $i<4 ; $i++) {
         // echo $semana[$i]  . "<BR>"; 
          
         // }
// por si a dad ocasion no sabemos hasta donde llega
         // for ($i=0; $i<count($semana) ; $i++) {
         // echo $semana[$i]  . "<BR>"; 
          
         // }

         // para aregar otro valor

         // echo $semena="sabado";

         //   for ($i=0; $i<count($semana) ; $i++) {
         // echo $semana[$i]  . "<BR>"; 
          
         // }


     //     echo $semana[1];


     // array ejemplo 2

     $semana= array('lunes','martes','miercoles','sabado','jueves');

     // Pr ODERNAR POR ABCDARIO
     sort($semana);
     // echo $semana[2];
     for ($i=0; $i <count($semana) ; $i++) {

     print $semana[$i] . "<BR>";
       # code...
     }

     print"<br><br><br>";

     // array ejemplo 3 asociativa
$datos= array("nombre" =>"Eric" ,"apellido" =>"Azcorra" ,"edad" =>19 , );

$datos["pais"]="mexico";

// print $datos["nombre"];
// print $datos["apellido"];


// para comprobar que es un arrat
// if (is_array($datos)) {
//   echo "es un array";
// }else{
//   echo "no lo es";
// }

// como recorrer los elementos del array

foreach ($datos as $clave => $valor) {
  print"A $clave le corresponde $valor <BR>";
  # code...
}
print"<br><br><br><br>";


// arrays multidimensioneles

//------------Array--------------
// $alimentos=array("fruta"=>array("tropical"=>"kiwi",
//                                  "citrico"=>"manzana"),
//                  "leche"=>array("animal"=>"vaca",
//                                 "vegetal"=>"coco"),
//                  "carne"=>array("vacuno"=>"lomo",
//                                 "porcino"=>"pata"));
//----------------------


// echo $alimentos["fruta"]["citrico"];
// foreach ($alimentos as $alim => $contenido) {
//   echo "$alim <BR>";
//   // por cada contenido lo desdoble en su clave y su valor

//   while (list($clave,$valor)=each($contenido)) {
//     print"$clave=$valor<br>";
//     # code...
//   }
//   print"<br>";
//   # code...
// }


//--------------------------------
// imprimir el aray

// print var_dump($alimentos);
// print"<BR><BR><BR><BR>";

//------------------------------------


// include sirve para lllamar a otros archivos externos
    include("php.php");
    dameDatos();
    print"<BR>";

    // el siguiente texto se puede plasmar de la siguiente manera tomado en cuenta que las comillas dobles y simples tiene un motivo e la cual utilzaria las viarblaes
     print "hola como estas tu?   <BR>"; 	
print'Bienvenidos al curso <br>';
// esto sirve para definir la fecha
echo date("d/m/Y");
print"<BR>";


// una funcion de define de la sioguinete manera

function hola(){

	print 2+2;

}

hola();

// varablea locales, global y super global

function dameNombre(){
	global $nombre;

	$nombre=" el nombre es <BR>". $nombre;
}

dameNombre();

echo $nombre;
print"<br><br> <br> <br>";

// incrementardor de numeros

function IncrementaValor(){

	static $contador=0;
	$contador++;

	echo $contador;
}

incrementaValor();
incrementaValor();
incrementaValor();
incrementaValor();





      ?>


</body>
</html>