import React from 'react'
import { HashLink } from 'react-router-hash-link'
import "./header.css"

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SoftLand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-4 gap-3">
        <li className="nav-item">
          <HashLink smooth className='nav-link' to="/#home">Home</HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth className='nav-link' to="/#about">About</HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth className='nav-link' to="/#features">Features</HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth className='nav-link' to="/#pricing">Pricing</HashLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><HashLink smooth className='dropdown-item' to="#">Dropdown 1</HashLink></li>
            <li><HashLink smooth className='dropdown-item' to="#">Dropdown 2</HashLink></li>
            <li><HashLink smooth className='dropdown-item' to="#">Dropdown 3</HashLink></li>
            <li><HashLink smooth className='dropdown-item' to="#">Dropdown 4</HashLink></li>
            <li><HashLink smooth className='dropdown-item' to="#">Dropdown 5</HashLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <HashLink smooth className='nav-link' to="/#contact">Contact</HashLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header