const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
const colors = require('colors');


crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );








// console.clear();

// const [ , , arg3 = 'base=3'] = process.argv;
// const [ , base = 3] = arg3.split('=');

// console.log(base);


// // const base = 9;

// crearArchivo(base)
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch( err => console.log(err) );








