(function (){
	//variebles.
var lista = document.getElementById('lista'),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea= document.getElementById("btn-agregar");


    //funciones
    var agregarTarea = function(){
    	// alert('agregar tarea');
    	var tarea=tareaInput.value,
    	nuevaTarea = document.createElement("li"),
    	enlace = document.createElement("a"),
    	contenido=document.createTextNode(tarea);

    	if (tarea=="") {
    		tareaInput.setAttribute("placeholder","Agregar tarea valida");
    		tareaInput.className= "error";
    		return false;
    	}

    	//agregamos el contenido al enlace.
    	enlace.appendChild(contenido);
    	//le establecemos un atributo href
    	enlace.setAttribute("href","#");
    	//agregamos el enlace (a) a la lista (li)
    	nuevaTarea.appendChild(enlace);
    	//agregamos la nueeva tarea a la lista
    	lista.appendChild(nuevaTarea);

    	tareaInput.value="";

    	for (var i=0; i<= lista.children.length - 1; i++) {
    		lista.children[i].addEventListener("click", function(){
    			this.parentNode.removeChild(this);
    		});
    	}

    };

    var comprobarInput = function(){
    	//alert('comprobar');
    	tareaInput.className="";
    	tareaInput.setAttribute("placeholder","Agrega tu tarea");
    };

    var eliminarTarea = function(){
    	// alert('eliminar');
    	this.parentNode.removeChild(this);
    	
    };


    //eventos

    btnNuevaTarea.addEventListener("click", agregarTarea);

    //comprobar input
    tareaInput.addEventListener("click",comprobarInput);

    //ejecutar un ciclo elimnando elementos de la lista
   for (var i = 0 ; i <= lista.children.length - 1; i++) {
   lista.children[i].addEventListener("click", eliminarTarea);

   }


}());