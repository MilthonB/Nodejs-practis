
const { http } = require('../plugins')


const pokemonById = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    
    const pokemon = await http.get(url)
    return pokemon.name;
//    return fetch(url).then( (res) => {
//         return res.json() // es una prmesa
//     })
//     .then((pokemon)=>{
//         return pokemon.name
//     })

}


// const pokemonById =(id) =>{
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`


//    return fetch(url).then( (res) => {
//         return res.json() // es una prmesa
//     })
//     .then((pokemon)=>{
//         return pokemon.name
//     })

// }


module.exports = pokemonById