import React, {Component} from 'react'
import Project from '../../Project'
import projects from './projects.json'


class ProjectsPage extends Component {


  render () {
    return (
      <div className="projects-section d-flex row justify-content-center">
        {projects
          .slice(0, 3)
          .map( project => (
              <Project
              key = {project.id}
              name = {project.name}
              image = {project.image}
              description = {project.description}
              live = {project.live}
              code = {project.code}
              />
            )
          )
        } 
        {projects
          .slice(3, 6)
          .map( project => (
              <Project
              key = {project.id}
              name = {project.name}
              image = {project.image}
              description = {project.description}
              live = {project.live}
              code = {project.code}
              />
            )
          )
        } 
    </div>
    )
  }
  
}

export default ProjectsPage