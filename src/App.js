import React from 'react'
import Header from './components/Header'
import {useState,useEffect} from 'react'
import VerPokemones from './components/VerPokemones'
import AgregarPokemon from './components/AgregarPokemon'
import EditarPokemon from './components/EditarPokemon'
import EliminarPokemon from './components/EliminarPokemon'

import VerEntrenadores from './components/VerEntrenadores'
import AgregarEntrenador from './components/AgregarEntrenador'
import EditarEntrenador from './components/EditarEntrenadores'
const App = () => {
  const [pokemones,setPokemones]=useState([{
    nombre:"Pikachu",
    tipo:"Rayo",
    peso:10,
    adoptado:false
},
{
    nombre:"Bulbasor",
    tipo:"Agua",
    peso:5,
    adoptado:false
},
{
    nombre:"Charmander",
    tipo:"Fuego",
    peso:"10kg",
    adoptado:false
}
])
const [entrenadores,setEntrenadores]=useState([{
  nombre:"Ash",
  direccion:"Pueblo paleta",
  correo:"hola@hotmail.com",
  edad:17,
  pokemones:[]
},{
  nombre:"Bruck",
  direccion:"asdsada",
  correo:"hola@hotmail.com",
  edad:18,
  pokemones:[{
    nombre:"Raichu",
    tipo:"Rayo",
    ataque:"giro bola",
    peso:12,
    adoptado:true
}]
}
])

//Agregar pokemon
const addPokemon= async(pokemon)=>{

  //Agrega en base de datos
    
   // const data=await res.json()
    
   setPokemones([...pokemones,pokemon])
   window.alert("Pokemon agregado")
    }

    const editarPokemon= async(pokemon)=>{
      const prefiltro= pokemones.filter((poke)=>{
      return poke.nombre===pokemon.nombre
      })
      
      if(prefiltro.length>0){
        const filtro=pokemones.filter((poke)=>{
          return poke.nombre!==pokemon.nombre
        })
        setPokemones([...filtro,pokemon])
      }else{
        window.alert("No existe el pokemon")
      }

       
    
      //Agrega en base de datos
        
       // const data=await res.json()
       window.alert("Pokemon editado")
        }
        
        const eliminarPokemon=async(nombre)=>{

          /* */
          setPokemones(pokemones.filter((poke)=>{
            return poke.nombre!==nombre
          }))
          window.alert("Pokemon eliminado")
        }
            

  return (
    <>
   <Header/>
   <VerPokemones pokemones={pokemones}/>
   <AgregarPokemon onAgregarPokemon={addPokemon}/>
   <EditarPokemon onEditarPokemon={editarPokemon}/>
    <EliminarPokemon onEliminarPokemon={eliminarPokemon}/>
    <VerEntrenadores entrenadores={entrenadores}/>
    <AgregarEntrenador/>
    <EditarEntrenador/>
    </>
  )
}

export default App

