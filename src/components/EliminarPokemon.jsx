import React from 'react'
import {useState} from 'react'
const EliminarPokemon = ({onEliminarPokemon}) => {
    const [nombre,setNombre]=useState("")
    const handleInput=(e)=>{
        const {value,name}=e.target
        
        setNombre(value)
        
    }
   const handleSubmit=(e)=>{
    e.preventDefault()
    
    if(nombre.length>0){
        onEliminarPokemon(nombre)
        //setNombre("")
}else{
window.alert("Inserta al menos un nombre")
}
    }




    return (
        <div className="container mt-3 mb-5">
            <h2>Eliminar pokemon</h2>
            <p>Introduce el nombre del pokemon a eliminar (tiene que existir en base de datos)</p>
        <form method="POST" action="/eliminarPokemon" onSubmit={handleSubmit}>
            <div className="row mb-5">
            <div className="col-sm-12">
                <div className="form-group">
                    <label htmlFor="name">Nombre pokemon</label>
                    <input type="text" className="form-control" name="nombrePokemon" id="name"
                        placeholder="Introduce nombre pokemon" onChange={handleInput}/>
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

export default EliminarPokemon
