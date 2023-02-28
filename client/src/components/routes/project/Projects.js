import React from 'react'

const Projects = () => {
  return (
    <div className='page'>
      <h1>Projects</h1>
      <ul className='projects'>
        <li key={1}>
          <p><a href='https://main.d2x5veo5ef99gu.amplifyapp.com/' target={'_blank'} rel='noreferrer'>Algorithm Visualizer</a> - A visualization app for demonstrating knowledge of algorithms.</p>
        </li>
        <li key={2}>
          <p><a href='http://weatherapp-env.eba-xvgfx2gu.us-east-1.elasticbeanstalk.com/' target={'_blank'} rel='noreferrer'>Weather App</a> - A weather app made with node and handlebars which uses an entered location to find the time and temperature.</p>
        </li>
      </ul>
    </div >
  )
}

export default Projects