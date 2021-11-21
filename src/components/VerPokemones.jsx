import React from 'react'
import {useState,useEffect} from 'react'
const VerPokemones = ({pokemones}) => {

    const filtrado=pokemones.filter((pokemon)=>{
      return pokemon.adoptado !==true
    })

    const filtradoPokemones = filtrado.map((pokemon,i)=>{
        return (
            <div className="col-sm-4" key={i}>
            <div className="card">
              <div className="card-header">
                <h3>Pokemon #{i+1}</h3>
              </div>
              <div className="card-body">
                <h3>Nombre: {pokemon.nombre}</h3>
                <h3>tipo: {pokemon.tipo}</h3>
                <h3>peso (kg): {pokemon.peso}</h3>
                <h3>Ataque: {pokemon.ataque}</h3>
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
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
