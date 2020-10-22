import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                type="text"
                name="firstName"
                value={props.data.firstName}
                placeholder="First Name"
                onChange={props.handleChange} 
                />
                <br />
                <input 
                type="text"
                name="lastName"
                value={props.data.lastName}
                placeholder="Last Name" 
                onChange={props.handleChange}
                />
                <br />
                <input 
                type="number"
                name="age" 
                value={props.data.age}
                placeholder="Age" 
                onChange={props.handleChange}
                />
                <br />

                {/* Create radio buttons for gender here */}
                <input 
                type="radio"
                name="gender"
                value="male"
                checked={props.data.gender === "male"}
                onChange={props.handleChange}/>Male
                <br />

                <input 
                type="radio"
                name="gender"
                value="female"
                checked={props.data.gender === "female"}
                onChange={props.handleChange}/>Female
                <br />
                
                {/* Create select box for location here */}
                <select 
                value={props.data.destination}
                name="destination"
                onChange={props.handleChange}
                >
                    <option value="">Please Choose a Destination</option>
                    <option value="taiwan">Taiwan</option>
                    <option value="hong kong">Hong Kong</option>
                    <option value="vietnam">vietnam</option>
                    <option value="sweden">Sweden</option>
                    <option value="denmark">Denmark</option>
                </select>
                <br />
                
                {/* Create check boxes for dietary restrictions here */}
                <label> Allergies?
                    <br />
                    <input
                    type="checkbox"
                    name="isVegan"
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                    />Vegan

                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="isKosher"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                    />Kosher
            
                </label>
                <br />
                <label>
                    <input
                    type="checkbox"
                    name="isLactoseFree"
                    onChange={props.handleChange}
                    checked={props.data.isLactoseFree}
                    />Lactose
                </label>
                <br />
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
         <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>
                Your dietary restrictions: 
                {props.data.isVegan ? "Vegan" : "Not Vegan"}
                <br /> 
                {props.data.isKosher ? "Kosher" : "Not Kosher"}
                <br />
                {props.data.isLactoseFree ? "Lactose Intolerant" : "Not Lactose Intolerant"}
            </p>
        </main>
    )
}
export default FormComponent    