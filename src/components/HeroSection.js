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
    const w = useRef(null);
    const r = useRef(null);

useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["function whoIsChrisEliason( ) &#123;"],
      typeSpeed: 70,
      smartBackspace: true,
      loop: false,
      showCursor: false,
    });

    const typed2 = new Typed(e.current, {
        strings: ["const person = {<br />firstName: &quot;Christopher&quot;,<br />lastName: &quot;Eliason&quot;,<br />hobbies: [ &quot;Mountain Biking&quot; ,  &quot;Video Games&quot; ,  &quot;Eating Mexican Food&quot; ],<br/ >technicalSkills: [],<br />age: 26<br /><br />return    person;"],
        startDelay: 3200,
        typeSpeed: 70,
        backSpeed: 10,
        smartBackspace: true,
        loop: false,
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

    const typed35 = new Typed(r.current, {
        strings: ["//forgot to add my skills"],
        startDelay: 17000,
        typeSpeed: 70,
        smartBackspace: true,
        loop: false,
        showCursor: false,
    });

    const typed4 = new Typed(q.current, {
        strings: ["var arr = [ &quot;Java&quot;, &quot;Javascript&quot;, &quot;React&quot; &quot;HTML&quot;, &quot;CSS&quot;];<br /><br />person.technicalSkills.push(arr);"],
        typeSpeed: 70,
        startDelay: 18000,
        smartBackspace: true,
        loop: false,
        showCursor: false,
      });

      const typed5 = new Typed(w.current, {
        strings: [""],
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
        typed35.destroy();
        typed4.destroy();
        typed5.destroy();
      };
    }, []);

    

    return (
        <div className="hero-container">
            <h1>&lt; chris eliason /&gt;</h1>
            <span className='func' ref={el}></span>
            <span className='var' ref={e}></span>
            <span className='curly' ref={l}></span>
            <br />
            <span className='comment' ref={r}></span>
            <span className='skills' ref={q}></span>
            <span className='arrPush' ref={w}></span>
        </div>


    )


}



export default HeroSection;