import React from 'react';
import '../App.css';
// import { Button } from './Button';
import { useEffect, useRef } from 'react';
import Typed from "typed.js";
import './HeroSection.css';



// var aboutMe = &quot;scroll down to learn about me&quot;
// &rbrace;

function HeroSection(props) {

    const el = useRef(null);
    const e = useRef(null);
    const l = useRef(null);
    const q = useRef(null);

useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["function whoIsChrisEliason( ) &#123;"],
      typeSpeed: 70,
      smartBackspace: true,
      loop: false,
      showCursor: false,
    });

    const typed2 = new Typed(e.current, {
        strings: ["const person = {<br />firstName: &quot;Christopher&quot;,<br />lastName: &quot;Eliason&quot;,<br />hobbies: [ &quot;Mountain Biking&quot; ,  &quot;Video Games&quot; ,  &quot;Eating Mexican Food&quot; ],<br />age: 26"],
        startDelay: 3200,
        typeSpeed: 70,
        backSpeed: 10,
        smartBackspace: true,
        loop: true,
        showCursor: false,
    });
   

    const typed3 = new Typed(l.current, {
        strings: ["&rbrace;"],
        startDelay: 17000,
        typeSpeed: 70,
        smartBackspace: true,
        loop: false,
        showCursor: false,
    });

    const typed4 = new Typed(q.current, {
        strings: ["var skills = [ &quot;Javascript&quot; , &quot;Java&quot; , &quot;HTML&quot; , &quot;CSS&quot;]"],
        typeSpeed: 70,
        startDelay: 18000,
        smartBackspace: true,
        loop: false,
        showCursor: false,
      });



    return () => {
        typed.destroy();
        typed2.destroy();
        typed3.destroy();
        typed4.destroy();
      };
    }, []);

    

    return (
        <div className="hero-container">
            <h1>&lt; chris eliason /&gt;</h1>
            <span className='func' ref={el}></span>
            <span className='var' ref={e}></span>
            <span className='curly' ref={l}></span>
            <span className='skills' ref={q}></span>
        </div>


    )


}



export default HeroSection;