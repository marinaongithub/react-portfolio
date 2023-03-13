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
              <li className="nav-item">
                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
                  }
                >
                  Projects
                </NavLink>
              </li>
            </div>
            </div>
        </nav>
  )
}

export default Header