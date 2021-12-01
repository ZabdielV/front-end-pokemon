import React from 'react'

const VerEntrenadores = ({entrenadores}) => {

  
      const misEntrenadores = entrenadores.map((entrenador,i)=>{
          const pokemonesEnEntrenador=entrenador.pokemons.map((poke,i)=>{
            return (
                <div className="card" key={i}>
                  <div className="card-header">
                  </div>
                  <div className="card-body">
                    <h3>Nombre: {poke.nombre}</h3>
                    <p>ataque: {poke.ataque}</p>
                    <p>tipo: {poke.tipo}</p>
                    <p>peso (kg) : {poke.peso}</p>
                    <p>descripción : {poke.descripcion}</p>
                  </div>
                  <div className="card-footer">
                  </div>
                </div>
            )
          })
          return (
              <div className="col-sm-4" key={i}>
              <div className="card">
                <div className="card-header">
                  <h3>Entrenador #{i+1}</h3>
                </div>
                <div className="card-body bg-blue">
                  <h3>Nombre: {entrenador.nombre}</h3>
                  <p>Direccion: {entrenador.direccion}</p>
                  <p>Correo: {entrenador.correo}</p>
                  <p>Edad: {entrenador.edad}</p>
                  <p>Mis pokemones:</p>
                  {pokemonesEnEntrenador.length>0?pokemonesEnEntrenador:<p>No hay pokemones</p>}
                </div>
                <div className="card-footer">
                </div>
              </div>
            </div>
          )
      })
  
      return (
          <div className="container mt-3 mb-5 mt-10" id="Entrenadores">
              <h2>Los entrenadores actuales son:</h2>
              <div className="row">
                  {misEntrenadores.length>0?misEntrenadores:<h2>Actualmente no hay entrenadores disponibles</h2>}
              </div>
          </div>
      )
}

export default VerEntrenadores
