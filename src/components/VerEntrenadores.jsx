import React from 'react'

const VerEntrenadores = ({entrenadores}) => {

  
      const misEntrenadores = entrenadores.map((entrenador,i)=>{
          const pokemonesEnEntrenador=entrenador.pokemones.map((poke,i)=>{
            return (
                <div className="card" key={i}>
                  <div className="card-header">
                  </div>
                  <div className="card-body">
                    <h3>Nombre: {poke.nombre}</h3>
                    <h3>ataque: {poke.ataque}</h3>
                    <h3>tipo: {poke.tipo}</h3>
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
                <div className="card-body">
                  <h3>Nombre: {entrenador.nombre}</h3>
                  <h3>Direccion: {entrenador.direccion}</h3>
                  <h3>Correo: {entrenador.correo}</h3>
                  <h3>Edad: {entrenador.edad}</h3>
                  <h3>Mis pokemones:</h3>
                  {pokemonesEnEntrenador}
                </div>
                <div className="card-footer">
                </div>
              </div>
            </div>
          )
      })
  
      return (
          <div className="container mt-3 mb-5" id="Entrenadores">
              <h2>Los entrenadores actuales son:</h2>
              <div className="row">
                  {misEntrenadores}
              </div>
          </div>
      )
}

export default VerEntrenadores
