const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(51.509998, -0.130000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

        try {
            const coord = await lugar.getLugarLatLng(direccion);
            const temp = await clima.getClima(coord.lat, coord.lng);
            return `El clima de ${coord.direccion} es de ${temp}.`
        } catch (e) {
            return `No se pudo determinar el clima de ${direccion}.`
        }

    }
    // 51.509998, -0.130000 London

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)