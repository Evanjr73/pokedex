function convertPokemonToli(pokemon){
    return`
    
         <li class="pokemons">
            <span class="nunber">#001</span>
            <span class="name">${pomenon.name}</span>



            <div class="detail">

                <ol class"types"> 

                    <li class="type">grass</li>
                    <li class="type">poison</li>


                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">

            </div>

        </li>    
    `

    
}

const pokemonList = document.getElementById("pokemonList")


    pokeAPI.getPokemons().then((pokemon = []) => {
        const newHTml = pokemons.map(convertPokemonToli).join("")
        pokemonList.innerHTML = newHTml
    })