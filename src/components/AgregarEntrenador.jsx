import React from 'react'
import {useState} from 'react'
const AgregarEntrenador = ({onAgregarEntrenador}) => {
    const [entrenador,setEntrenador]=useState({
        nombre:"",
        direccion:"",
        correo:"",
        edad:0,
        pokemones:[]
    })
    const handleInput=(e)=>{
        const {value,name}=e.target
        setEntrenador({...entrenador,[name]:value })
    }
   const handleSubmit=(e)=>{
        e.preventDefault()
                if(entrenador.nombre.length>0){
                    onAgregarEntrenador(entrenador)
  /*          setEntrenador({
                nombre:"",
                direccion:"",
                correo:"",
                edad:0,
                pokemones:[]
           }) */
        }else{
            window.alert("Inserta al menos un nombre")
        }
        


    }

    return (
        <div className="container mt-3 mb-5">
        <h2>Registro de Entrenador</h2>
        <p>Solo puedes agregar un nombre unico (no repetido)</p>
    <form action="" onSubmit={handleSubmit}>
        <div className="row mb-5">
        <div className="col-sm-6">
            <div className="form-group">
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" className="form-control" name="nombre" id="nombre"
                    placeholder="Introduce nombre entrenador" onChange={handleInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="direccion">Direccion: </label>
                <input type="text" className="form-control" name="direccion" id="direccion"
                    placeholder="Introduce la direccion" onChange={handleInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="correo">Correo: </label>
                <input type="email" className="form-control" name="correo" id="correo"
                    placeholder="Introduce su proxima evolucion" onChange={handleInput}/>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="form-group">
                <label htmlFor="edad">Edad : </label>
                <input type="number" className="form-control" name="edad" id="edad"
                    placeholder="Introduce la edad" onChange={handleInput}/>
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

export default AgregarEntrenador
