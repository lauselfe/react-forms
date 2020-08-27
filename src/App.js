import React from 'react';

import './App.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      firstName : "",
      lastName : "",
      age : "",
      gender : "",
      destination : "",
      isVegan : false , 
      isKosher : false,
      isLactoseFree : false

    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? 
    this.setState({
          [name] : checked
    })
    :
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          
      <input 
      name="firstName" 
      value={this.state.firstName}  
      onChange={this.handleChange} 
      placeholder="First Name" 
      className="input-text"/>
      <br />     

      <input 
      name="lastName" 
      value={this.state.lastName}
      onChange={this.handleChange}  
      placeholder="Last Name"
      className="input-text" />
      <br />

      <input 
      name="age" 
      value={this.state.age} 
      onChange={this.handleChange}  
      placeholder="Age"
      className="input-text" />
      <br />

      <label>
        <input 
        type="radio"
        name="gender"
        value="male"
        checked={this.state.gender === "male"}
        onChange={this.handleChange}
        />Male
        <br />
        <input 
        type="radio"
        name="gender"
        value="female"
        checked={this.state.gender === "female"}
        onChange={this.handleChange}
        />Female
      </label>
      <br />
      <select 
      value={this.state.destination} 
      name="destination" 
      onChange={this.handleChange}
      >
        <option value="">----Please choose a destination---</option>
        <option value="paris">Paris</option>
        <option value="roma">Roma</option>
        <option value="berlin">Berlin</option>
        <option value="oslo">Oslo</option>
      </select>
< br/>
      <label>
        <input 
        type="checkbox"
        name="isVegan"
        onChange={this.handleChange}
        checked={this.state.isVegan}
        /> Vegan?
         <br />
             <input 
        type="checkbox"
        name="isKosher"
        onChange={this.handleChange}
        checked={this.state.isKosher}
        /> Kosher?
        <br />
             <input 
        type="checkbox"
        name="isLactoseFree"
        onChange={this.handleChange}
        checked={this.state.isLactoseFree}
        /> Lactose free?
      </label>
      <br />
      <button>Submit</button>
        </form>

        <hr />

        <h2>Entered your information:</h2>
    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
    <p>Your age : {this.state.age}</p>
    <p>Your gender: {this.state.gender}</p>
    <p>Your destination: {this.state.destination}</p>
    <p>
      Your dietary restrictions:  </p>
      <p>
      Vegan: {this.state.isVegan ? "Yes" : "No"}
      </p>
      <p>
      Kosher: {this.state.isKosher ? "Yes" : "No"}
      </p>
      <p>
      Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
      </p>
      </div>
    );
  }
 
}

export default App;
