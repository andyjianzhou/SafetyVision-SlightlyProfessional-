import React from 'react';
import "../hero.css"

/*
function constructor() {
        this.state = {
            keys: Array(2).fill(' ')
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    function handleChange(event) {
        let target = event.target;
        console.log(target);
        let name = target.name;
        let value = target.value;
        let which = target.name === "username" ? 0 : 1;
        let notWhich = target.name === "username" ? 1 : 0
        let saver = this.state.keys
        saver[which] = value
        this.setState({
            keys: saver
        })
    }
    function handleSubmit(event) {
        console.log(event)
        event.preventDefault()
        // embed firebase API
    }
    function handleRegister(event) {
        event.preventDefault()
    }
    */
export default function login() {

    function handleSubmit(){
        let currSite = document.location.origin;
        window.location.replace(currSite + "/login");
    }
    return (
        <>
            <div className="hero-background">
                <div className = "two-columns">
                    <div className = "left-column">
                        <div className = "left-column-content">
                            <h1 className='hero-title'>Safety<span class="other-word">Vision.AI</span></h1>
                            <p className='hero-paragraph'>Be safe wherever you are. Whatever you do.</p>
                            <input className='hero-button' type="button" value="Enter" onClick={handleSubmit} />
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