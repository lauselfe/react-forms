import React from 'react'

function FormComponent(props) {
    return (
        
            <div className="App">
              <form>
                
            <input 
            name="firstName" 
            value={props.data.firstName}  
            onChange={props.handleChange} 
            placeholder="First Name" 
            className="input-text"/>
            <br />     
      
            <input 
            name="lastName" 
            value={props.data.lastName}
            onChange={props.handleChange}  
            placeholder="Last Name"
            className="input-text" />
            <br />
      
            <input 
            name="age" 
            value={props.data.age} 
            onChange={props.handleChange}  
            placeholder="Age"
            className="input-text" />
            <br />
      
            <label>
              <input 
              type="radio"
              name="gender"
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.handleChange}
              />Male
              <br />
              <input 
              type="radio"
              name="gender"
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.handleChange}
              />Female
            </label>
            <br />
            <select 
            value={props.data.destination} 
            name="destination" 
            onChange={props.handleChange}
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
              onChange={props.handleChange}
              checked={props.data.isVegan}
              /> Vegan?
               <br />
                   <input 
              type="checkbox"
              name="isKosher"
              onChange={props.handleChange}
              checked={props.data.isKosher}
              /> Kosher?
              <br />
                   <input 
              type="checkbox"
              name="isLactoseFree"
              onChange={props.handleChange}
              checked={props.data.isLactoseFree}
              /> Lactose free?
            </label>
            <br />
            <button>Submit</button>
              </form>
      
              <hr />
      
              <h2>Entered your information:</h2>
          <p>Your name: {props.data.firstName} {props.data.lastName}</p>
          <p>Your age : {props.data.age}</p>
          <p>Your gender: {props.data.gender}</p>
          <p>Your destination: {props.data.destination}</p>
          <p>
            Your dietary restrictions:  </p>
            <p>
            Vegan: {props.data.isVegan ? "Yes" : "No"}
            </p>
            <p>
            Kosher: {props.data.isKosher ? "Yes" : "No"}
            </p>
            <p>
            Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}
            </p>
            </div>
          );
   
}

export default FormComponent
