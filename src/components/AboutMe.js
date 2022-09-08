import React from 'react'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="about-container">
            <div className='list-container'>
                <ul className="skills-list">
                    <li className="skills-item">
                        Java
                    </li>
                    <li className="skills-item">
                        React
                    </li>
                    <li className="skills-item">
                        Javascript
                    </li>
                    <li className="skills-item">
                        jQuery
                    </li>
                </ul>
                <ul className="skills-list">
                    <li className="skills-item">
                        HTML
                    </li>
                    <li className="skills-item">
                        CSS
                    </li>
                    <li className="skills-item">
                        Bootstrap
                    </li>
                    <li className="skills-item">
                        MySQL
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe