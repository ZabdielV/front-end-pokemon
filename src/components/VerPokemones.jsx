import React from 'react'
import Pokemon from './Pokemon'
const VerPokemones = ({pokemones}) => {

    const filtrado=pokemones.filter((pokemon)=>{
      return pokemon.adoptado !==true
    })

 

    const filtradoPokemones = filtrado.map((pokemon,i)=>{
        return (
            <Pokemon keyProp={i} pokemon={pokemon}/>
        )
    })

    return (
        <div className="container mt-3 mb-5 mt-10" id="pokemones">
            <h2>Los pokemones en adopcion son:</h2>
            <div className="row">
                {filtradoPokemones}
            </div>
        </div>
    )
}

export default VerPokemones
