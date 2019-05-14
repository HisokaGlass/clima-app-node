const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=70d16d253abd458aaa50bcc1c32cb16e&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}