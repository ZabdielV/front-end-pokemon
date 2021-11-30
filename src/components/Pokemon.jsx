import React from 'react';
import {useState} from 'react';
import imagenPokebola from '../pokebola_fondo.png'


const Pokemon = ({keyProp,pokemon}) => {

    //${esSeleccionado ? 'image-pokemon' : 'image-pokebola'}
const [esSeleccionado,setSeleccionado]=useState(false);



    return (
        <div className="col-sm-4" key={keyProp}>
        <div className="card pokemon-settings">
          <div className="card-header">
            <h3>Pokemon #{keyProp+1}</h3>
          </div>
          <div className="card-body" style={esSeleccionado ? { backgroundImage:`url(${pokemon.image})`} :{ backgroundImage:`url(${imagenPokebola})`} }>
              {esSeleccionado && <h3>Nombre: {pokemon.nombre}</h3>}
              {esSeleccionado && <h3>tipo: {pokemon.tipo}</h3>}
              {esSeleccionado && <h3>peso (kg): {pokemon.peso}</h3>}
              {esSeleccionado && <h3>Ataque: {pokemon.ataque}</h3>}
            
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-primary" onClick={()=>{setSeleccionado(!esSeleccionado) }}>{esSeleccionado ?"Ocultar pokemon":"Ver pokemon"}</button>
          </div>
        </div>
      </div>
    )
}

export default Pokemon
