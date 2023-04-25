// // // // // dineroMarcos = prompt("cuanto dinero tenes marcos");
// // // // // dineroSilvia = prompt("cuanto dinero tenes silvia");
// // // // // dineroEnzo = prompt("cuando dinero tenes enzo");

// // // // let pc = {
// // // //     nombre: "Marcos",
// // // //     procesador: "Intel core 5",
// // // //     ram: "8GB",
// // // //     espacio: "1TB"
// // // // };

// // // // let nombre = pc["nombre"];
// // // // let procesador = pc["procesador"];
// // // // let ram = pc["ram"];
// // // // let espacio = pc["espacio"];


// // // // frase = ` El nombre de mi pc es: <b>${nombre}<b> <br>
// // // //           El procesador es: <b>${procesador}<b> <br>
// // // //           La memoria ram es de : <b>${ram}<b> <br>
// // // //           El espacio es de : <b>${espacio}<b> <br>
// // // //         `;

// // // // document.write(frase);        


// // // // function saludar (){
// // // //     return "todo okay";
// // // //     alert ("hola")
// // // // }



// // // // let saludo = saludar();

// // // // document.write(saludo)

// // // // let num1 = 12;
// // // // let num2 = 12;

// // // // let res = num1 + num2;

// // // // document.write(res);



// // // // function suma(num1,num2){
// // // //     let res = num1 + num2;
// // // //     document.write(res);
// // // //     document.write("<br>")
// // // // }

// // // // suma(22,31)

// // // // suma(2,6,3)




// // // // let free = false;

// // // // const validarCliente = (time)=>{
// // // //     let edad = prompt("Cual es tu edad");
// // // //     if (edad > 18) {
// // // //         if (time >= 2 && time < 7 && free== false) {
// // // //             alert ("podes pasar gratis porque sos la primer persona despues de las 2am");
// // // //             free = true;
// // // //         }   else {
// // // //             alert (`son las ${time}:00hs y podes pasar pero tenes que pagar la entrada`);
// // // //         }
// // // //     } else {
// // // //         alert("sos menor de edad no podes pasar flaco");
// // // //     }
// // // // }


// // // // validarCliente(22);
// // // // validarCliente(23);
// // // // validarCliente(26);
// // // // validarCliente(2);
// // // // validarCliente(52);
// // // // validarCliente(72);
// // // // validarCliente(25);




// // // // let cantidad = prompt("¿cuantos alumnos son?");
// // // // let alumnosTotales = [];
 
// // // // for (i = 0; i < cantidad; i++) {
// // // //     alumnosTotales[i] = [prompt("Nombre del Alumno" + (i+1)),0];
// // // // }

// // // // const tomarAsistencia = (nombre,p)=>{
// // // //     let presencia = prompt(nombre);
// // // //     if (precencia == "p" || presencia == "P") {
// // // //         alumnosTotales[p][1]++;
// // // //     }
// // // // }

// // // // for ( i = 0; i < 30; i++) {
// // // //     for (alumno in alumnosTotales) {
// // // //         tomarAsistencia(alumnosTotales[alumno][0],alumno);
// // // //     }
// // // // }

// // // // for (alumno in alumnosTotales) { 

// // // //     let resultado = `${alumnosTotales[alumno][0]}:<br>
// // // //     __________Presentes : ${alumnosTotales[alumno][1]}<br>
// // // //     __________Ausencias : ${30 - parseInt (alumnosTotales[alumno][1])}<br>
// // // //     `;
// // // //     if (30 - alumnosTotales[alumno][1] > 18) {
// // // //         resultado+= "REPROBADO POR INASISTENCIAS <br><br>"; 
// // // //     } else {
// // // //         resultado+= "<br><br>"
// // // //     }   document.write (resultado)
// // // // } 



//     const sumar = (num1,num2)=>{
//         return parseInt(num1) + parseInt(num2);
//     }

//     const restar = (num1,num2)=>{
//         return parseInt(num1) - parseInt(num2);
//     }

//     const dividir = (num1,num2)=>{
//         return parseInt(num1) / parseInt(num2);
//     }

//     const multiplicar = (num1,num2)=>{
//         return parseInt(num1) * parseInt(num2);
//     }

//     alert("¿Que operacion queres hacer?");
//     let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

//     if (operacion == 1){
//         let numero1 = prompt("primer numero para sumar");
//         let numero2 = prompt("segundo numero para sumar");
//         resultado = sumar(numero1,numero2)
//         alert(`Tu resultado es ${resultado}`);
//     }

   
//     else if  (operacion == 2){
//         let numero1 = prompt("primer numero para restar");
//         let numero2 = prompt("segundo numero para restar");
//         resultado = restar(numero1,numero2)
//         alert(`Tu resultado es ${resultado}`);

//     }

//     else if  (operacion == 3){
//         let numero1 = prompt("primer numero para dividir");
//         let numero2 = prompt("segundo numero para dividir");
//         resultado = dividir(numero1,numero2)
//         alert(`Tu resultado es ${resultado}`);

//     }

//     else if  (operacion == 4){
//         let numero1 = prompt("primer numero para multiplicar");
//         let numero2 = prompt("segundo numero para multiplicar");
//         resultado = multiplicar(numero1,numero2)
//         alert(`Tu resultado es ${resultado}`);

//     }

//     else {
//         alert("no se ha encontrado la operacion")
//     }

            

// // class animal {
// //     constructor(especie,edad,color){
// //         this.especie = especie;
// //         this.edad = edad;
// //         this.color = color;
// //         this.info = `Tengo un ${this.especie}, tiene ${this.edad} años y es de color ${this.color}`;
// //     }
// // }

// // let  perro = new animal ("perro", 5, "marron");
// // let rinoceronte = new animal ("rinoceronte", 12, "gris");
// // let loro = new animal ("loro", 14, "rojo");

// // document.write(perro.info + "<br>")
// // document.write(rinoceronte.info + "<br>")
// // document.write(loro.info + "<br>")


// class celulares{
//     constructor(color,peso,rdp,rdc,ram){
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encencido = false;

//     }
//     precionarBotonEncendido(){
//         if (this.encencido == false) {
//             alert("prendiendo");
//             this.encencido = true;
//         } else{
//             alert("celular apagado")
//         }
//     }
// }

