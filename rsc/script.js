// let buttons = document.querySelectorAll(".buttons button")
// let colores = document.querySelectorAll(".col");
// console.log(colores)
// let arreglo =[];
// colores.forEach(element => arreglo.push[element.id]);

// console.log(arreglo)

// i = colores.

// colores[i].onclick = function(){
//     console.log(i);
// }

/*
colores[0].onclick = function(){
    console.log("rojo");
}
colores[1].onclick = function(){
    console.log("verde");
}
colores[2].onclick = function(){
    console.log("azul");
}
colores[3].onclick = function(){   
    console.log("chocolatozo");
}
*/


// let botonesClickeados;


// botonColores.forEach(i => botonColores[i].onclick = function() {
//     botonesClickeados.push(botonColores[i].id)
//     console.log(botonesClickeados)
// });


let botonColores = document.querySelectorAll(".col");
let listadoUsuario = [];
let listadoMaquina = [];
let numeroDeRonda = 1;

jugadaUsuario()

function jugadaUsuario(){
botonColores[0].onclick = function(){
    listadoUsuario.push(botonColores[0].id);
    console.log(listadoUsuario)
}
botonColores[1].onclick = function(){
    listadoUsuario.push(botonColores[1].id);
    console.log(listadoUsuario)
}
botonColores[2].onclick = function(){
    listadoUsuario.push(botonColores[2].id);
    console.log(listadoUsuario)
}
botonColores[3].onclick = function(){   
    listadoUsuario.push(botonColores[3].id);
    console.log(listadoUsuario)
}
}

document.querySelector("#botonComenzar").onclick = function(){
    
    //setTimeout(disminuirOpacidad(numeroAleatorio()), 4000);
}

function disminuirOpacidad(i) {
    botonColores[i].style.opacity = "0.5"
    setTimeout(function(){botonColores[i].style.opacity = "1"}, 1000);
}

function numeroAleatorio() {
    let numeroRandom = Math.floor(Math.random()*4)
    return numeroRandom
}

function jugadaMaquina(numeroDeRonda){
    for(i=0;i<numeroDeRonda;i++){ 
        listadoMaquina.push = numeroAleatorio()
    }
}
