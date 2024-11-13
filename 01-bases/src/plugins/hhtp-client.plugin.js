

const axios = require('axios')

const hhtpclientPlugin  = {

    get: async (url)=>{
        const resp = await axios.get(url)
        // const resp = await fetch(url);
        // const data = await resp.json();
        // return data;
        return resp.data;
    }

}



module.exports = {http:hhtpclientPlugin}











