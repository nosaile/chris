import React, {useState} from 'react'
import './About.css'
import {RiFolderDownloadLine} from 'react-icons/ri'
import {RiFolderDownloadFill} from 'react-icons/ri'

const About = () => {

  const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


  return (
    <div id="about" className='about'>
      <div className='container'>
      <span className='about-con'>
        <br />
        <br />
        <br />
        <br />
        <p className='welcome'>welcome</p>
        <br />
        <br />
        <br />
        <p>
          my name is Christopher Eliason and i<span style={{ color: '#f2f3f4' }}>`</span>m
          a full stack web developer from Lubbock, TX<span style={{ color: '#f2f3f4' }}>.</span>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <hr style={{
          height: .5,
          borderColor: '#f2f3f4'
        }} /> */}
        <br />
        <br />
        <br />
        <br />
        <p className='personal'>personal life</p>
        <br />
        <br />
        <br />
        <br />
        <p>i<span style={{ color: '#f2f3f4' }}>'</span>m a United States Marine Corps veteran<span style={{ color: '#f2f3f4' }}>, </span>
          and some of my hobbies are mountain biking and playing video games<span style={{ color: '#f2f3f4' }}>.</span></p>
        <br /> <br />
        <br />
        <br />
        <br />
        {/* <hr style={{
          height: .5,
          borderColor: '#f2f3f4'
        }} /> */}
        <br />
        <br />
        <br />
        <br />
        <p className='tech-ability'> technical skills</p>
        <br />
        <br />
        <br />
        <p>
         html  <span style={{ color: '#f2f3f4' }}> | </span>  css  <span style={{ color: '#f2f3f4' }}> | </span>  javascript
          <span style={{ color: '#f2f3f4' }}> | </span>  react<span style={{ color: '#f2f3f4' }}>.</span>js  <span style={{ color: '#f2f3f4' }}> | </span>  java
          <span style={{ color: '#f2f3f4' }}> | </span>  mysql  <span style={{ color: '#f2f3f4' }}> | </span> spring boot
        </p>
        <br />
        <br />
        <br />
        <br />
        {/* <hr style={{
          height: .5,
          borderColor: '#f2f3f4'
        }} /> */}
        <br />
        <br />
        <br />
        <br />
        <div onClick={handleClick} className='resume-download'>
        {click ? <RiFolderDownloadLine className='icon' /> : <RiFolderDownloadFill className='icon' />}
        <br />
        <p className='resume'>download resume</p>
      </div>
      </span>
      </div>
    </div>
  )
}

export default About