import React from 'react'
import '../hero.css'
//import react-scroll
import { Link as LinkScroll } from 'react-scroll'

const Hero = () => {
    return (
        <>
        <div className='hero-background'>
            <div className='two-columns'>
                <div className='left-column'>
                    <div className='left-column-content'>
                        <h1 className='hero-title'>Safety<span class="other-word">Vision.AI</span></h1>
                        <p className='hero-paragraph'>Be safe wherever you are. Whatever you do.</p>
                        {/* Smooth scrolling searches through all div id's and scrolls to them */}
                        <LinkScroll to='login' smooth={true} duration={500} className='hero-button'>Get Started</LinkScroll>
                    </div>
                </div>
                <div className='right-column'>
                    <img src={require('../UI/robot.png')} alt='hero' className='hero-image' />
                </div>
            </div>
        </div>
    </>
    )
}

export default Hero