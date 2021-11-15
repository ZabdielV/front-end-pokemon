import React from 'react'

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
      <div className="container-fluid">
      <a className="navbar-brand" href="#logo">Adopta un pokemon</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
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
    <header id="inicio" className="bg-image shadow-1-strong rounded">
        <div className="container">
            <div className="row titulo">
                <div className="col-sm-12">
                <h1>Adopta un pokemon</h1>
                <p className="bold">¿Te interesa adopar un pokemon o quieres ver información de tus pokemones actuales? Checa nuestra página</p>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}

export default Header
