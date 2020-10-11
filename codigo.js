new Vue({
el:'#codigo',
data:{
texto:'hola',
nu1:1,
nu2:2,
nu3:3,
nu4:4,
nu5:5,
nu6:6,
nu7:7,
nu8:8,
nu9:9,
resultado:0,
num:0,

numm:0,
numm2:0,
resultado2:0,

inf:false,
inf2:false,
usu:'',
passu:'',

sal:false,

// suma:0,

usuarios:[{us:'eric',pas:'123'},],


},
methods:{

suma:function () {
	if (this.nu1.toString() && this.nu2.toString()) {
		this.resultado= parseFloat(this.nu1) + parseFloat(this.nu2);
	}else{
		alert('ASIGNA VALORES');
	}
},
uno:function(){
if (this.num.toString() && this.nu1.toString()) {
	this.num=parseFloat(this.nu1);
	// this.num=parseFloat(this.nu2);
}
},
dos:function(){
if (this.num.toString() && this.nu2.toString()) {
	this.num=parseFloat(this.nu2);
	// this.num=parseFloat(this.nu2);
}
},
tres:function(){
if (this.num.toString() && this.nu3.toString()) {
	this.num=parseFloat(this.nu3);
	// this.num=parseFloat(this.nu2);
}
},
cuatro:function(){
if (this.num.toString() && this.nu4.toString()) {
	this.num=parseFloat(this.nu4);
	// this.num=parseFloat(this.nu2);
}
},
cinco:function(){
if (this.num.toString() && this.nu5.toString()) {
	this.num=parseFloat(this.nu5);
	// this.num=parseFloat(this.nu2);
}
},
seis:function(){
if (this.num.toString() && this.nu6.toString()) {
	this.num=parseFloat(this.nu6);
	// this.num=parseFloat(this.nu2);
}
},
siete:function(){
if (this.num.toString() && this.nu7.toString()) {
	this.num=parseFloat(this.nu7);
	// this.num=parseFloat(this.nu2);
}
},

ocho:function(){
if (this.num.toString() && this.nu8.toString()) {
	this.num=parseFloat(this.nu8);
	// this.num=parseFloat(this.nu2);
}
},
nueve:function(){
if (this.num.toString() && this.nu9.toString()) {
	this.num=parseFloat(this.nu9);
	// this.num=parseFloat(this.nu2);
}
},


suma:function () {
	if (this.num.toString() , this.nu2.toString()) {
		this.num= parseFloat(this.num) + parseFloat(this.mu1,nu2,nu3,nu4);
	}else{
		// alert('ASIGNA VALORES');
	}
},
igual:function (){
if (this.num.toString()) {this.num= this.num;

}else{
	alert('hola');
}
},
va:function (){
		if (this.numm.toString(), this.numm2.toString()) {
		this.resultado2= parseFloat(this.numm)+parseFloat(this.numm2);
		}
		else{
		alert('llena el contenido');
		}
	},

	validar: function (rol) {
switch(rol){
	case 'vali':
	for(var i=0; i<=this.usuarios.length-1;i++) {
		var us1='';
		var pas1='';
 
		us1 = this.usuarios[i]['us'];
		pas1 = this.usuarios[i]['pas'];
		 
		if(this.usu==us1 && this.passu==pas1){
			this.inf2=true;
			this.inf=true;
		
            
			this.usu='';
			this.passu='';

		}
		alert('LA CONTRASEÑA ES INCORRECTA');
		
	}
	break;

}


},
salir:function(){
this.inf=false;
this.inf2=false;
},






}



}) 
