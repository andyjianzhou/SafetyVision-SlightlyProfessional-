import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
        
    }
    handleRegister(event) {
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className = "mainToMove">
                <img src='logo.png'></img>
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
                    type = "text"
                    name = "password"
                    value = {this.state.value}
                    onChange = {this.handleChange}
                    />
                    <br></br>
                <input className='loginSubmit' type="submit" value="Submit" onSubmit={this.handleSubmit} />
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
        )
    }
}

class Main extends React.Component {
    render() {
      return (
        <div className = 'loginPage'>
            <div className = 'loginDetails'>
                <LoginForm/>
            </div>
        </div>
      );
    }
}
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Main/>);
  