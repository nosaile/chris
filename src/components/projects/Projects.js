import React from 'react'
import { AiFillGithub, AiOutlineLinkedin, AiTwotoneMail } from 'react-icons/ai'
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
                <div className='contacts' id='contacts'>
                    <div className='logos'>
                    <a href='https://github.com/nosaile' target='_blank' className='logo' id='github'><AiFillGithub /></a>
                    <a href='https://www.linkedin.com/in/christopher-eliason/' target='_blank' className='logo' id='linkedin'><AiOutlineLinkedin /></a>
                    <a href='mailto: eliason.chris1@gmail.com' className='logo' id='email'><AiTwotoneMail /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects