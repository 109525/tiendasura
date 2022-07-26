//creando variables - comentario de linea
/*
creando variable
comentario de bloque
*/
 /*let nombreUsuario="Angel Soto"

const EDAD_USUARIO=26
let estaturaUsuario=1.70
let hinchaDelRojo=true

console.log(nombreUsuario)

EDAD_USUARIO=20
console.log(EDAD_USUARIO)*/

//MERCANDO CON EL PROFE
let producto1="arroz"
let producto2="leche"
let producto3="huevo"
let producto4="carne de cerdo"
let producto5="pollo"
let producto6="galletas"
let producto7="panela"
let producto8="cafe"
let producto9="tapa roja"
let producto10="cerveza"
let producto11="tomate"
let producto12="papas"
let producto13="lechuga"
let producto14="frijoles"
let producto15="aceite"

//ARREGLOS DE DATOS
//UN ARREGLO ES UNA VARIABLE ESPECIAL
// 1. ARREGLO TRADICIONAL
let numeros=[1,2,8,9,45]
let nombre=["juan","catalina","mario","carlos"]
let contagios=[true,false,false,false,true]
//1.1 accediendo a todos los datos  (elementos) de un arreglo
console.log(numeros)
//1.2 accedineod a un solo elemento del arreglo
console.log(numeros[3]) 

//2. arreglos orientados a objetos POO
let notas=Array(3.5,2.8,3.9,5)
console.log(notas)
console.log(notas[1])

//3. variables especiales para guardar varios datos
//de tipos diferentes
//objetos

let persona={

    nombre: "Angel", 
    apellidos:["Soto","orozco"],
    edad:26,
    hinchaDelMejor:true
}

//3.1 accediendo a todos los datos de un objeto

console.log(persona)

//3.2 accediendo a un solo atributo del objeto 
console.log(persona.nombre)
console.log(persona.apellidos[0])