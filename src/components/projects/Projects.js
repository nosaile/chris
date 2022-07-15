import React from 'react'
import './Projects.css'


const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className='container'>
                <div className='first-line'>
                    <div className='project-link'>
                        <p><a target='_blank' href='https://www.flickr.com/photos/196043505@N05/albums/72177720300545991'>vetted</a></p>
                    </div>
                    <div className='project-link'>
                        <p><a target='_blank' href='https://www.flickr.com/photos/196043505@N05/albums/72177720300557048'>weather map</a></p>
                    </div>
                    <div className='project-link'>
                        <p><a target='_blank' href='https://www.flickr.com/photos/196043505@N05/albums/72177720300555539'>contacts manager</a></p>
                    </div>
                </div>
                <div className='second-line'>
                    <div className='project-link'>
                        <p><a target='_blank' href='https://www.flickr.com/photos/196043505@N05/albums/72177720300547545'>text-based game</a></p>
                    </div>
                    <div className='project-link'>
                        <p><a target='_blank' href='https://www.flickr.com/photos/196043505@N05/albums/72177720300546001'>movies api</a></p>
                    </div>
                    <div className='project-link'>
                        <p><a target='_blank' href='https://www.flickr.com/photos/196043505@N05/albums/72177720300557103'>weather app react</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects