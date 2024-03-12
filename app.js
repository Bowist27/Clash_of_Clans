//fs es el módulo que contiene las funciones para 
//manipular el sistema de archivos
const filesystem = require('fs');

//Se escribe el segundo parámetro en el archivo del primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola mundo desde node');

const te_hackie = () => {
    console.log("jojo te hackié");
}

//setTimeout ejecuta la función recibida como primer parámetro 
//cuando hayan transcurrido los milisegundos del segunto parámetro
setTimeout(te_hackie, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//Imprime el arreglo de manera ordenada
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

console.log("¿En dónde se ejecuta esta línea?");


// const http = require('http');

// const server = http.createServer( (request, response) => {    
//     console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("");
//     response.end();
// });

// server.listen(3000);
