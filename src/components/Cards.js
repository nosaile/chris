import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1 id='about'>About Me</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
                            src="../../assets/mtnbike.png"
                            text="I've alway enjoyed mountain biking ever since I was a little kid. 
                            I like to go on rides so I can get out into nature and enjoy the trails."
                            label="Hobbies"
                            path="/"
                        />
                        <CardItem
                            src="../../assets/codeup.png"
                            text="I attended a coding bootcamp called Codeup in Dallas, TX. 
                            There I learned the in's and out's of software development and being a 
                            full stack developer."
                            label="School"
                            path="/"
                        />
                        <CardItem
                            src="../../assets/usmc1.png"
                            text="I served four years in the United States Marine Corps as a radio operator. Now 
                            I'm looking to break into the tech industry.
                            "
                            label="USMC"
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards