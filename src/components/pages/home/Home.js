import React from 'react'
import avatar from './profile.jpg'

function Home() {
  return (
    <div className="jumbotron" id="home">
        <img src={avatar} alt='avatar'/>
        <h1 className="display-4">My Portfolio.</h1>
        <p className="lead">Have a look around to discover my projects, learn a bit more about me and my skills.</p>
        <p>Contact me if you like my work!</p>
    </div>
  )
}

export default Home