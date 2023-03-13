import React from 'react'
import Project from '../Project'

function ProjectsPage() {
  return (
    <div className="projects-section d-flex row justify-content-center">
        {/* <div class="row"> */}
          <Project/>
          <Project/>
          <Project/>
        {/* </div> */}
        {/* <div class="row"> */}
          <Project/>
          <Project/>
          <Project/>
        {/* </div> */}
    </div>
  ) 
}

export default ProjectsPage