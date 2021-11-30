import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  //<a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
  //<a className="nav-link" href="#pokemones">Pokemones</a>
  //<a className="nav-link" href="#Entrenadores">Entrenadores</a>
  //<Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
  //<Link className="nav-link" to="/pokemones">Pokemones</Link>
  //<Link className="nav-link" to="/Entrenadores">Entrenadores</Link>
    return (
        <>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container-fluid bigger-font-size">
        <a className="navbar-brand" href="#logo">Adopta un pokemon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#pokemones">Pokemones</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#Entrenadores">Entrenadores</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
        </>
    )
}

export default NavBar
