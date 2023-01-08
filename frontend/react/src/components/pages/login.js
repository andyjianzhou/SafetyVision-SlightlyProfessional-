import React from 'react'
import { Card } from 'react-bootstrap'
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keys: Array(2).fill(' ')
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
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
    handleSubmit(event) {
        console.log("Removing")
        event.preventDefault()
        this.remove()
    }
    handleRegister(event) {
        event.preventDefault()
    }
    render() {
        return (
            // <Card>
            <form onSubmit={this.handleSubmit} className = "mainToMove">
                <img src='https://github.com/andyjianzhou/SafetyVision-SlightlyProfessional-/blob/main/frontend/react/src/logo.png?raw=true'></img>
                <br></br>
                <br></br>
                <br></br>
                <label className='whatToDo'>
                    Username: 
                    
                </label>
                <br></br>
                <input 
                    className= 'loginInput' 
                    type = "text"
                    name = "username"
                    value = {this.state.value}
                    onChange = {this.handleChange}
                    />
                <label className='whatToDo'>
                    Password: 
                    
                </label>
                <br></br>
                <input  
                    className= 'loginInput'
                    type = "password"
                    name = "password"
                    value = {this.state.value}
                    onChange = {this.handleChange}
                    />
                    <br></br>
                <input className='loginSubmit' type="submit" value="Login" onSubmit={this.handleSubmit} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <input className='registering' type="submit" value="Make an Account" onSubmit={this.handleRegister} />
            </form>
        // </Card>
        )
    }
}
export default LoginForm