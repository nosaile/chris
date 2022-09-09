import React from 'react'
import './ProjectPage.css'
import { Link } from 'react-router-dom';

function ProjectPage() {
    return (
        <div className="projects-container">
            <div className="project-box">
                <div className="project-description">
                    Vetted is an audio, video, and text communication platform that links veterans with shared experiences and interests in an online environment with consistency, compassion, and connection as a priority. Through identity verification and complete anonymity, we are able to provide veterans with a protected place to communicate whenever they want, wherever they want, and how they want.
                </div>
                <div className="project-img">
                    <img src="../../assets/vetted.png" alt="vetted homepage"></img>
                </div>
            </div>
            <div className="project-box">
                <div className="project-description no">
                    A dynamic map that allows a user to pinpoint any location on earth and get weather data in a 5-day forecast for that area, using data grabbed from several APIs. Skills gained were the proper usage of and how to repurpose existing API data for custom formatting.
                </div>
                <div className="project-img">
                    <img src="../../assets/weather.png" alt="weather map homepage"></img>
                </div>
                <div className="project-description hide">
                    A dynamic map that allows a user to pinpoint any location on earth and get weather data in a 5-day forecast for that area, using data grabbed from several APIs. Skills gained were the proper usage of and how to repurpose existing API data for custom formatting.
                </div>
            </div>
            <div className="project-box">
                <div className="project-description">
                    An adventure game. The point is to try and survive throughout the night in the Appalachian mountains. However you will encounter many monstrous creatures who will attempt to harm you. Can you survive the night?
                </div>
                <div className="project-img">
                    <img src="../../assets/appalachian.png" alt="appalachian adventure game"></img>
                </div>
                <div className="project-description hide no">
                    An adventure game. The point is to try and survive throughout the night in the Appalachian mountains. However you will encounter many monstrous creatures who will attempt to harm you. Can you survive the night?
                </div>
            </div>
            <div className="project-box">
                <div className="project-description no">
                    An app made to store a collection of movie data, as well as allow the end-user to enter new information. In this project, I explored grabbing data from an established database to bring it in to our own format. My role was on the usage of the API and bringing our data to the front-end user experience.
                </div>
                <div className="project-img">
                    <img src="../../assets/movie.png" alt="movie app homepage"></img>
                </div>
                <div className="project-description hide">
                    An app made to store a collection of movie data, as well as allow the end-user to enter new information. In this project, I explored grabbing data from an established database to bring it in to our own format. My role was on the usage of the API and bringing our data to the front-end user experience.
                </div>
            </div>
            <div className="function-call">
                <Link to="/about" className='func'><h1>whoIsChrisEliason();</h1></Link>
            </div>
        </div>
    )
}

export default ProjectPage