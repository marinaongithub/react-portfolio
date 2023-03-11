import React from 'react'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light customNav">
            <a className="navbar-brand" href="#"><span>Marina.</span><span>Developer</span></a>    {/* TODO: check span */}

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#wPork">Projects</a>
                <a className="nav-item nav-link" href="#contact">Contact</a>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Header