import React from 'react';
import '../App.css';
// import { Button } from './Button';
import { useEffect, useRef } from 'react';
import Typed from "typed.js";
import './HeroSection.css';



// var aboutMe = &quot;scroll down to learn about me&quot;
// &rbrace;

function HeroSection() {

    const el = useRef(null);
    const e = useRef(null);
    const l = useRef(null);

useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["function whoIsChrisEliason( ) &#123;\n"],
      typeSpeed: 70,
      smartBackspace: true,
      loop: false,
      showCursor: false,
    });

    const typed2 = new Typed(e.current, {
        strings: ["var aboutMe = &quot;scroll down to learn about me&quot;;"],
        startDelay: 3200,
        typeSpeed: 70,
        backSpeed: 100,
        smartBackspace: true,
        loop: true,
        showCursor: false,
    });

    const typed3 = new Typed(l.current, {
        strings: ["\n&rbrace;"],
        startDelay: 7850,
        typeSpeed: 70,
        smartBackspace: true,
        loop: false,
        showCursor: false,
    });

    return () => {
        typed.destroy();
        typed2.destroy();
        typed3.destroy();
      };
    }, []);

    

    return (
        <div className="hero-container">
            <h1>&lt; chris eliason /&gt;</h1>
            <span className='func' ref={el}></span>
            <span className='var' ref={e}></span>
            <span className='curly' ref={l}></span>
        </div>


    )


}



export default HeroSection;