import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light customNav">
            <h1 className="navbar-brand"><span>Marina.</span>  Developer</h1>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >Home
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
                  }
                >
                  Contact
                </NavLink>
              </li>
                {/* <a className="nav-item nav-link" href={Home}></a> */}
                <a className="nav-item nav-link" href="#Projects">Projects</a>
                {/* <a className="nav-item nav-link" href="#contact">Contact</a> */}
            </div>
            </div>
        </nav>
  )
}

export default Header