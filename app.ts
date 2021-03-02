//Autor: Juan Camilo Cardona C.

//Práctica 1 - Tipos de datos

//Tipo string
let miNombre : string = "Juan Camilo Cardona Calderón";

//Tipo number
let miEdad : number = 22;

//Tipo boolean
let soltero : boolean = true;

//Tipo any -> No se recomienda su uso de forma extendida.
let cualquier : any = "hola";

//Tipado implícito:
let variable = "Colombia";   //Se infiere que es de tipo string
let otraVariable = 12345;    //Se infiere que es de tipo number
let unArreglo = [1,2,3,4,5]; //Se infiere que es de tipo (array<number> ó number[], es lo mismo)

//Tipo array fuertemente tipado
let misPasatiempos: String[] = ["Viajar" , "Estudiar" , "Leer" , "Jugar fútbol", "Estar en familia"];

//Tipo array fuertemente tipado
let amigos: Array<string> = ["Andrés" , "Alejandro" , "Cristian" , "Santiago", "Kevin"];


//Tipo array debilmente tipado
let vecCualquiera: any[] = ["Juan Camilo" , true , "Medellin" , {} , 10400];

//Tipo array debilmente tipado
let otroVecCualquiera: Array<any> = ["Juan Camilo" , true , "Medellin" , {} , 10400];

//A una variable le podemos asignar dos o más tipos de datos aceptables

//La siguiente variable acepta una cadena ó un número:
let cadONumero :string | number;

cadONumero = "Hola, me llamo Juan Camilo Cardona";
cadONumero = 22;

//La siguiente variable acepta un arreglo de enteros o un valor booleano
let a : number[] | boolean;
a = [1.5 , -0.5 , 1.11, Math.sqrt(2), Math.PI];
a = false;

//La siguiente variable acepta un entero, una cadena o un valor booleano

let b : string | number | boolean;

b = "Hola queridos amigos!";
b = Math.abs(-8);
b = Math.random() *10 >= 5;

//El siguiente arreglo acepta cadenas de texto o números
let c :(string | number)[] = ["Hello",10,-15,20,"bye",-30]; 

//Tipado en los objetos

let camilo = {                    //-> Si posicionamos el mouse sobre el nombre del objeto
   nombres:"Juan Camilo",         //   aparecerán las variables con sus tipo de dato asignado
   apellidos:"Cardona Calderón",  //   de forma implícita
   edad:22,
   soltero:true,
   datosRandom:[Math.random()*100 + 200,"Viajar","Estudiar","Estar con amigos",10,true]
} 

//Si intentamos sobreescribir el objeto camilo, éste deberá contener exactamente las
//mismas propiedades con los mismos tipos de dato o sino sacará error.

//Destructuración: 

//Destructuración de arreglos:
//Destructurar el siguiente arreglo de nombres:
let misAmigos :string[] = ["Andres Grisales","Alejandro Valencia","Cristian Morales","Santiago Echeverry","Jose Bernal","Duvan Ruiz"];

const [aG, ,cM,sE, ,dR] = misAmigos;    //Para la destructuración de arreglos IMPORTA EL ORDEN
console.log(aG);
console.log(cM);
console.log(sE);
console.log(dR);
//Se ignoró a Alejandro Valencia y a Jose Bernal

//Destructuración como parámetros de una función

//const destructurarVec = ([aG,aV, ,sE,jB]:string[]) => {      //<- también se puede así
const destructurarVec = ([aG,aV, ,sE,jB]:Array<string>) => {
   console.log(aG);
   console.log(aV);
   console.log(sE);
   console.log(jB);
   //Se ignoró a Cristian Morales y a Duvan Ruiz
}
destructurarVec(misAmigos);   //Hacemos el llamado a la función y le enviamos el arreglo de string

//Destructuración de objetos:
//Destructurar el siguiente objeto:
const cristian = {
   nombre:"Cristian Daniel",
   apellido:"Morales",
   edad:23,
   genero:"m",
   correo:"cris.morales857@gmail.com",
   telefono:"213343264"
}

const {edad, nombre, telefono,genero} = cristian;

console.log(edad);
console.log(nombre);
console.log(telefono);
console.log(genero);

//Destructuración como parámetros de una función:
const destructurarObj = ({edad,telefono,nombre,correo,apellido} : any) => {
   console.log(edad);
   console.log(telefono);
   console.log(nombre);
   console.log(correo);
   console.log(apellido);
   //Se ignoró a Cristian Morales y a Duvan Ruiz
}
destructurarObj(cristian);   //Hacemos el llamado a la función y le enviamos el objeto cristian


//Las funciones en TypeScript
//Se les debe de indicar el tipo de dato de os parámetros como también el tipo
//de dato retornado por la función, así:

//                                parámetro     parámetro    parámetro  tipo de retorno
//   function miFuncionDeclarada(par1:string , par2:string, par3:number) : string{
//   .
//   .  Cuerpo de la función
//   .
//   .  return(unDato); -> El dato retornado desde ser del tipo especificado arriba
//   }
//

//Ejemplo con funciones declaradas

function saludar(nombre:string , genero:string , edad:number):string{
   return(`Hola!!!!, mi nombre es ${nombre}, soy de sexo ${genero} y tengo ${edad} años`);
}
saludar("Juan Camilo", "Masculino" ,22);


                                             //Parámeto REST
function retornarPromedio (a:number,b:number, ...c:number[]):number {
   let acumulador = a + b ;
   c.forEach((elem) => {
      acumulador += elem;
   });
   return(acumulador / (c.length + 2));
}
retornarPromedio(1,2,3,4,5,12,325,45,7,68,42,98);


//Ejemplo con funciones expresadas

const saludar2 = function(nombre:string , genero:string , edad:number):string{
   return(`Hola!!!!, mi nombre es ${nombre}, soy de sexo ${genero} y tengo ${edad} años`);
}
saludar2("Juan Camilo", "Masculino" ,22);


                                             //Parámeto REST
const retornarPromedio2 = function(a:number,b:number, ...c:number[]):number {
   let acumulador = a + b ;
   c.forEach((elem) => {
      acumulador += elem;
   });
   return(acumulador / (c.length + 2));
}
retornarPromedio2(1,2,3,4,5,12,325,45,7,68,42,98);


//Ejemplo con funciones flecha (Arrow Functions)

const saludar3 = (nombre:string , genero:string , edad:number):string => {
   return(`Hola!!!!, mi nombre es ${nombre}, soy de sexo ${genero} y tengo ${edad} años`);
}
saludar3("Juan Camilo", "Masculino" ,22);


                                             //Parámeto REST
const retornarPromedio3 = (a:number,b:number, ...c:number[]):number => {
   let acumulador = a + b ;
   c.forEach((elem) => {
      acumulador += elem;
   });
   return(acumulador / (c.length + 2));
}
retornarPromedio3(1,2,3,4,5,12,325,45,7,68,42,98);


//Parámetros obligatorios, opcionales y por defecto:

//Obligatorios -> siempre se deben de enviar

//Ejemplo:

function presentarse(nom : string) : void { 
   console.log(`Hola, mi nombre es: ${nom}`);
}


//Opcionales -> No hay problema si se envían o no, si no se envían
//              se toman como undefined en el cuerpo de la función
//Para definir un parámetro como opcional debemos de agregar un 
//signo de interrogación ? luego del nombre
//Recomendable hacer una validación interna en la función

//Ejemplo:

function presentarse2(nom : string, edad? : number) : void { 
   if(edad){
   console.log(`Hola, mi nombre es: ${nom}.`);
   } else {
      console.log(`Hola, mi nombre es: ${nom} y tengo ${edad} años.`);
   }
}

presentarse2("Juan Camilo Cardona" ,22);
presentarse2("Juan Camilo");

//Por defecto -> Se les asigna un valor por defecto en el encabezado
//               de la función en caso de que no se envíe el parámetro

//Ejemplo:

function presentarse3(nom : string = "desconocido", edad : number = 0) : void { 
   console.log(`Hola, mi nombre es: ${nom} y tengo ${edad} años.`);
}

presentarse3();
presentarse2("Juan Camilo");
presentarse2("Juan Camilo",22);

//Por lo general el orden de los parámetros es:

//(1)Obligatorio, (2)Opcionales, (3) Por defecto