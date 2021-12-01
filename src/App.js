import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import {useState,useEffect} from 'react'
import VerPokemones from './components/VerPokemones'
import AgregarPokemon from './components/AgregarPokemon'
import EditarPokemon from './components/EditarPokemon'
import EliminarPokemon from './components/EliminarPokemon'
import {Routes,Route,Link,Outlet} from 'react-router-dom';
import VerEntrenadores from './components/VerEntrenadores'
import AgregarEntrenador from './components/AgregarEntrenador'
import EditarEntrenador from './components/EditarEntrenadores'
const App = () => {
  const [pokemones,setPokemones]=useState([])
const [entrenadores,setEntrenadores]=useState([])

//READ
useEffect(()=>{
  //console.log("Leyendo de base de datos")
  const readData= async ()=>{
    try{
      const resultado = await fetchPokemones()
      setPokemones(resultado)
    }

    catch(e){
      console.log(e)
    }
    //console.log(resultado)
    
  }
  readData()
},[])
const fetchPokemones=async()=>{
  const res=await fetch('http://localhost:8080/verPokemones')
  const data=await res.json()
  //console.log(data);
  return data
}

//CREATE

//Agregar pokemon
const addPokemon= async(pokemon)=>{
  const prefiltro= pokemones.filter((poke)=>{
    return poke.nombre===pokemon.nombre
    })
    
    if(prefiltro.length>0){
      window.alert("Pokemon ya existe, error")
    }else{

      const res =await fetch('http://localhost:8080/registrarPokemon',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(pokemon)
      })
      const respuestaServidor=await res.json()
      console.log(respuestaServidor)

      setPokemones([...pokemones,pokemon])
      window.alert("Pokemon agregado")
    }
    }

    //UPDATE
    const editarPokemon= async(pokemon)=>{
      const prefiltro= pokemones.filter((poke)=>{
      return poke.nombre===pokemon.nombre
      })
      
      if(prefiltro.length>0){
        const filtro=pokemones.filter((poke)=>{
          return poke.nombre!==pokemon.nombre
        })

        const res =await fetch('http://localhost:8080/registrarPokemon',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(pokemon)
      })

      const respuestaServidor=await res.json()
      console.log(respuestaServidor)

        setPokemones([...filtro,pokemon])
        window.alert("Pokemon editado")
      }else{
        window.alert("No existe el pokemon")
      }

       
    
     
    
        }
        
    //DELETE
    const eliminarPokemon=async(nombre)=>{
      const prefiltro= pokemones.filter((poke)=>{
        return poke.nombre===nombre
        })
        
        if(prefiltro.length>0){

          const res =await fetch('http://localhost:8080/registrarPokemon',{
            method:'POST',
            headers:{
              'Content-type':'application/json'
            },
            body: JSON.stringify({pokemonEliminado:nombre})
          })
    
          const respuestaServidor=await res.json()
          console.log(respuestaServidor)

          setPokemones(pokemones.filter((poke)=>{
            return poke.nombre!==nombre
          }))
          window.alert("Pokemon eliminado")




        }else{
          window.alert("Pokemon no existe")
        }

        }


        const editarPokemonesEnBase=async(nombre)=>{

          const res =await fetch('http://localhost:8080/registrarPokemon',{
            method:'POST',
            headers:{
              'Content-type':'application/json'
            },
            body: JSON.stringify({pokemonEliminado:nombre})
          })
    
          const respuestaServidor=await res.json()
          console.log(respuestaServidor)
          /* */
          setPokemones(pokemones.filter((poke)=>{
            return poke.nombre!==nombre
          }))
          
        }
    

//READ Entrenadores
useEffect(()=>{
  //console.log("Leyendo de base de datos")
  const readData= async ()=>{
    try{
      const resultado = await fetchEntrenadores()
      //console.log(resultado)
      setEntrenadores(resultado)
    }
    catch(e){
      console.log(e)
    }
  }
  readData()
},[])
const fetchEntrenadores=async()=>{
  const res=await fetch('http://localhost:8080/verEntrenadores')
  const data=await res.json()
  //console.log(data);
  return data
}



//Agregar entrenador
const addEntrenador= async(entrenador)=>{

  //Agrega en base de datos
    
   // const data=await res.json()
   const prefiltro= entrenadores.filter((entre)=>{
    return entre.nombre===entrenador.nombre
    })
    
    if(prefiltro.length>0){
      window.alert("Entrenador ya existe, error")
    }else{
      const res =await fetch('http://localhost:8080/registrarPokemon',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(entrenador)
      })
      const respuestaServidor=await res.json()
      console.log(respuestaServidor)

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

    //const pokemonesActuales=miEntrenador.pokemones
    //const nuevosPokemones=[...pokemonesActuales,miPokemon]

    
      //miEntrenador.pokemones=nuevosPokemones

      miEntrenador.pokemones=[...miEntrenador.pokemones,miPokemon]

      const arregloEntrenadores=entrenadores.filter((e)=>{
        return e.nombre!==entrenadorNombre
      })
      //Actualizar en base
      const res =await fetch('http://localhost:8080/registrarPokemon',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          nombreEntrenador:entrenadorNombre,
          listaNuevaPokemones:miEntrenador.pokemones
        })
      })
      const respuestaServidor=await res.json()
      console.log(respuestaServidor)

      //Actualizar o eliminar entrenador
      setEntrenadores([...arregloEntrenadores,miEntrenador])
    

      editarPokemonesEnBase(pokemonNombre)
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

