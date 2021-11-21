import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import {useState} from 'react'
import VerPokemones from './components/VerPokemones'
import AgregarPokemon from './components/AgregarPokemon'
import EditarPokemon from './components/EditarPokemon'
import EliminarPokemon from './components/EliminarPokemon'
import {Routes,Route,Link,Outlet} from 'react-router-dom';
import VerEntrenadores from './components/VerEntrenadores'
import AgregarEntrenador from './components/AgregarEntrenador'
import EditarEntrenador from './components/EditarEntrenadores'
const App = () => {
  const [pokemones,setPokemones]=useState([{
    nombre:"Pikachu",
    tipo:"Rayo",
    peso:10,
    adoptado:false,
    ataque:"giro bola"
},
{
    nombre:"Bulbasor",
    tipo:"Agua",
    peso:5,
    adoptado:false,
    ataque:"giro bola"
},
{
    nombre:"Charmander",
    tipo:"Fuego",
    peso:"10kg",
    adoptado:false,
    ataque:"giro bola"
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
  const prefiltro= pokemones.filter((poke)=>{
    return poke.nombre===pokemon.nombre
    })
    
    if(prefiltro.length>0){
      window.alert("Pokemon ya existe, error")
    }else{
      setPokemones([...pokemones,pokemon])
      window.alert("Pokemon agregado")
    }
  //Agrega en base de datos
    
   // const data=await res.json()
    

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
          //window.alert("Pokemon eliminado")
        }
    
//Agregar pokemon
const addEntrenador= async(entrenador)=>{

  //Agrega en base de datos
    
   // const data=await res.json()
   const prefiltro= entrenadores.filter((entre)=>{
    return entre.nombre===entrenador.nombre
    })
    
    if(prefiltro.length>0){
      window.alert("Entrenador ya existe, error")
    }else{
      setEntrenadores([...entrenadores,entrenador])
      window.alert("Entrenador agregado")
    }
    }        
const addPokemonEnEntrenador=async(entrenadorNombre,pokemonNombre)=>{
  //console.log(entrenadorNombre,pokemonNombre)
  const prefiltro= entrenadores.filter((entre)=>{
    return entre.nombre===entrenadorNombre
    })
    const prefiltro02= pokemones.filter((poke)=>{
      return poke.nombre===pokemonNombre
      })
    
    if(prefiltro.length>0 &&prefiltro02.length>0){
    const miEntrenador=prefiltro[0]
    const miPokemon=prefiltro02[0]
    const pokemonesActuales=miEntrenador.pokemones
    const nuevosPokemones=[...pokemonesActuales,miPokemon]
      miEntrenador.pokemones=nuevosPokemones
      const arregloEntrenadores=entrenadores.filter((e)=>{
        return e.nombre!==entrenadorNombre
      })
      //Actualizar o eliminar entrenador
      setEntrenadores([...arregloEntrenadores,miEntrenador])
      //Actualizar en base
     eliminarPokemon(pokemonNombre)
    }else{
      window.alert("Entrenador no existe o pokemon no existen, error")
    }
}
  return (
    <>
   <NavBar/>
   <Header/>
   <VerPokemones pokemones={pokemones}/> 
  <AgregarPokemon onAgregarPokemon={addPokemon}/>
  <EditarPokemon onEditarPokemon={editarPokemon}/>
  <EliminarPokemon onEliminarPokemon={eliminarPokemon}/>

   <VerEntrenadores entrenadores={entrenadores}/>
  <AgregarEntrenador onAgregarEntrenador={addEntrenador}/>
  <EditarEntrenador onEditar={addPokemonEnEntrenador}/>

    </>
  )
}

export default App

