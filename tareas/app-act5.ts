// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar():void;
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGoticaFn {
  ( ciudadanos: string[] ): number;
}

const ciudadGotica: CiudadGoticaFn = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface informacionPersona {
  edad: number;
  estadoCivil: string;
  nombre: string;
  sexo: string;
  imprimirBio(): void;
}

class Persona implements informacionPersona{
  edad: number;
  estadoCivil: string;
  nombre: string;
  sexo: string;
  imprimirBio(): void {
    throw new Error("Method not implemented.");
  }

  constructor(edad: number, estadoCivil: string, nombre: string, sexo: string){
    this.edad = edad;
    this.estadoCivil = estadoCivil;
    this.nombre = nombre;
    this.sexo = sexo;
  }
}