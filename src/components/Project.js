import React from 'react'

function Project() {
  return (
      <div class="cardContainer col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img src="images/OdeToCode.png" class="card-img-top project-img" alt="..."/>
          <div class="card-body project-body">
            <p class="card-text project-txt">OdeToCode is an homage to poetry and technology. 
            The users can discover new poems, search for their favourite ones and write reflections about them in a dedicated journal.</p>
              <div class="text-center">   
                <a href="https://marinabtc.github.io/OdeToCode/" class="btn btn-primary ">Go to the project</a>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Project