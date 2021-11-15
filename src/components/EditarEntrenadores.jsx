import React from 'react'
import {useState} from 'react'
const EditarEntrenadores = ({onEditar}) => {
    const [nombreEntrenador,setNombreEntrenador]=useState("")
    const [nombrePokemon,setNombrePokemon]=useState("")
    const handleInput01=(e)=>{
        const {value,name}=e.target
        
        setNombreEntrenador(value)
       
    }
    const handleInput02=(e)=>{
        const {value,name}=e.target
        
        setNombrePokemon(value)
        
    }
   const handleSubmit=(e)=>{
    e.preventDefault()
    
    if(nombreEntrenador.length>0 &&nombrePokemon.length>0){
        onEditar(nombreEntrenador,nombrePokemon)
}else{
window.alert("Inserta al menos un nombre en ambos campos")
}
    }

    return (
        <div className="container mt-3 mb-5">
            <h2>Editar entrenador (agregarle un pokemon)</h2>
            <p>Introduce el nombre del pokemon y nombre del entrenador (tienen que existir en base de datos)</p>
        <form method="POST" action="/eliminarPokemon" onSubmit={handleSubmit}>
            <div className="row mb-5">
            <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor="namePoke">Nombre pokemon</label>
                    <input type="text" className="form-control" name="namePoke" id="namePoke"
                        placeholder="Introduce nombre pokemon" onChange={handleInput02}/>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor="nameEntrenador">Nombre entrenador</label>
                    <input type="text" className="form-control" name="nameEntrenador" id="nameEntrenador"
                        placeholder="Introduce nombre entrenador" onChange={handleInput01}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-6">
                <input type="reset" className="btn btn-primary" />
                </div>
                <div className="col-6">
                <input type="submit" className="btn btn-primary"/>
                </div>
            </div>
            </div>
        </form>
        </div>
    )
}

export default EditarEntrenadores
