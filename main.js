//Hacer un diagnóstico de piel para recetarle un tratamiento
var nombre=prompt("¿Como te llamas?")
var edad=prompt("¿Cuantos años tienes?")
//Importamos la clase Diagnostico que tiene un método que crea una cadena
//var{Diagnostico}=require(`./Diagnostico`);

class Diagnostico{
  constructor(edad){
      this.edad=edad      //this.d="";
  }
  diag(){
      if (this.edad>40) {return "Usted tiene piel madura. Debe usar Timewise Repair"}
      else{return "Usted tiene piel relativamente joven. Debe usar Timewise 3D"}
 }
}

//Creamos un objeto llamado diag1, instancia de la clase Diagnostico importada
var diag1=new Diagnostico(edad);
//Se crea un mensaje de bienvenida con el nombre de la persona
var d=`Hola ${nombre}, gracias por usar mi nueva aplicación Facial Virtual. <br>`;
//A la bienvenida se agrega la cadena creada por el método diag de la clase Diagnostico importada
var d=d+diag1.diag();
//LLamado al objeto documento y al subobjeto izqReceta
//,,esto es, el cuadro izquierdo de la pantalla.
//Creamos la variable receta
var receta=document.getElementById("izqReceta");
//Se usa la propiedad innerHTML de la variable receta y se envia d,
//la cadena de texto que acabamos de crear, al codigo HTML para imprimirla en pantalla
receta.innerHTML=d;