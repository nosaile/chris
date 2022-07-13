import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className='container'>
                <div className='vetted'>
                    <h1>vetted</h1>
                </div>
                <div className='weather-map'>
                    <h1>weather map</h1>
                </div>
                <div className='contacts-manager'>
                    <h1>contacts manager</h1>
                </div>
                <div className='adventure'>
                    <h1>appalachian legends</h1>
                </div>
                <div className='movies-api'>
                    <h1>movies api</h1>
                </div>
                <div className='weather-react'>
                    <h1>weather react</h1>
                </div>
            </div>
        </div>
    )
}

export default Projects