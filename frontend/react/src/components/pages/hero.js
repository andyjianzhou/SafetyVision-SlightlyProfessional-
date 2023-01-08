import React from 'react';
import "./index.css";

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
        <form className = "loginPage">
            <img src='https://github.com/andyjianzhou/SafetyVision-SlightlyProfessional-/blob/main/frontend/react/src/logo.png?raw=true'></img>
            <br></br>
            <br></br>
            <br></br>
            <input className='loginSubmit' type="button" value="Enter" onClick={handleSubmit} />
            <br></br>
        </form>
    )
}