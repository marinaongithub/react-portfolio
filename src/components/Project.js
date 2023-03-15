import React from 'react'

function Project(props) {
  return (
      <div className="cardContainer col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <img src={props.image} class="card-img-top project-img" alt={props.name}/>
          <div className="card-body project-body">
            <p className="card-text project-txt">{props.description}</p>
              <div className="text-center project-buttons">   
                <a target="_blank" rel="noopener noreferrer" href={props.live} className="btn btn-primary" id="live">Live Project</a>
                <a target="_blank" rel="noopener noreferrer" href={props.source} className="btn btn-secondary" id="code">Source Code</a>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Project