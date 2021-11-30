import React from 'react'
import {useState} from 'react'
const EditarPokemon = ({onEditarPokemon}) => {
    const [pokemon,setPokemon]=useState({
        nombre:"",
        tipo:"",
        evolucion:"",
        peso:"",
        descripcion:"",
        image:"",
        ataque:"giro bola",
        adoptado:false
    })
    const handleInput=(e)=>{
        const {value,name}=e.target
        setPokemon({...pokemon,[name]:value })

    }
   const handleSubmit=(e)=>{
    e.preventDefault()
    if(pokemon.nombre.length>0){
        onEditarPokemon(pokemon)

}else{
window.alert("Inserta al menos un nombre")
}

    }

    return (
        <div className="container mt-3 mb-5">
        <h2>Editar pokemon</h2>
        <p>Introduce el nombre del pokemon para editar sus datos (tiene que existir en base de datos)</p>
        <form method="POST" action="/editarPokemon" onSubmit={handleSubmit}>
            <div className="row mb-5">
            <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre pokemon</label>
                    <input type="text" className="form-control" name="nombre" id="nombre"
                        placeholder="Introduce nombre pokemon" onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="tipo">Tipo pokemon</label>
                    <input type="text" className="form-control" name="tipo" id="tipo"
                        placeholder="Introduce el tipo de pokemon" onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="evolucion">Evolucion</label>
                    <input type="text" className="form-control" name="evolucion" id="evolucion"
                        placeholder="Introduce su proxima evolucion" onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Link de la imagen del pokemon</label>
                    <input type="text" className="form-control" name="image" id="image"
                        placeholder="Introduce un link del recurso" onChange={handleInput}/>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor="peso">Peso (kg): </label>
                    <input type="number" className="form-control" name="peso" id="peso"
                        placeholder="Introduce su peso" onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripcion: </label>
                    <input type="text" className="form-control" name="descripcion" id="descripcion"
                        placeholder="Introduce una descripcion" onChange={handleInput}/>
                </div>

                <div className="form-control">
                <label htmlFor="ataque" className="form-label">Tipo de ataque</label>
                <select className="form-select" id="ataque" name="ataque" onChange={handleInput}>
                    <option value="giro bola">giro bola</option>
                    <option value="Onda trueno">onda trueno</option>
                    <option value="Cola ferrea">Cola ferrea</option>
                    <option value="Cuerpo pesado">cuerpo pesado</option>
                </select>
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

export default EditarPokemon
