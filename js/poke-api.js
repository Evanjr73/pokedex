const pokeApi = {
}

pokeApi.getPokemons = {offset = 0 . limit = 10} => {
    const url = `https://poeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


    return fetch(url)

        .then((response) => response.json())
        .then((jsonBody)=> jsonBody.results)
}


fetch('https://pokeapi.co/api/v2/pokemon/1')

fetch('https://pokeapi.co/api/v2/pokemon/2')

fetch('https://pokeapi.co/api/v2/pokemon/3')

fetch('https://pokeapi.co/api/v2/pokemon/4')
