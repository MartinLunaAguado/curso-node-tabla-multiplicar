const fs= require('fs');
const colors = require('colors');

const crearArchivo = ( base=5, listar=false, hasta=10 ) => {   

    return new Promise((resolve, reject) => {
      let salida, consola = '';
       try {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        for (let i = 0; i < hasta + 1 ; i++) {
            salida += colors.blue(base) +'x'.green + i + " = " + base * i + "\n";
            consola += base + 'x' + i + " = " + base * i + "\n";
        }
        if (listar) {
            console.log('====================='.green);
            console.log('   Tabla del: '.green, colors.blue(base));
            console.log('====================='.green);
            console.log(salida);
        }
        
        fs.writeFileSync (`salida/tabla-${base}.txt`, consola);
        resolve(`tabla-${base}.txt`);
        }
        catch (err) {
            reject(err);
        }
    }
     
    );
}


module.exports = {
    crearArchivo
}



















