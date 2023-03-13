import React from 'react'

function Project(props) {
  return (
      <div class="cardContainer col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img src={props.image} class="card-img-top project-img" alt={props.name}/>
          <div class="card-body project-body">
            <p class="card-text project-txt">{props.description}</p>
              <div class="text-center project-buttons">   
                <a href={props.live} class="btn btn-primary" id="live">Live Project</a>
                <a href={props.source} class="btn btn-secondary" id="code">Source Code</a>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Project