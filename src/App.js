import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName:"",
          age: "",
          gender: "",
          destination: "Taiwan",
          vegan: false,
          indian: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event){
      const { name, value, type, checked } = event.target
      type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                    />
                    <br />
                    <input 
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                    />
                    <br />
                    <input 
                    type="number"
                    value={this.state.age}
                    name="age"
                    placeholder="Age" 
                    onChange={this.handleChange}
                    />
                    <br />
                    
                    <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>Male
                    <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>Female
                    <br />
                    
                    <label>Your Destination:</label>
                    <select
                    value={this.state.destination}
                    onChange={this.handleChange}
                    name="destination"
                    >
                    <option value="Taiwan">Taiwan</option> 
                    <option value="Dubai">Dubai</option> 
                    <option value="Thailand">Thailand</option> 
                    <option value="Hong Kong">Hong Kong</option> 
                    <option value="Mexico">Mexico</option> 
                    <option value="Colombia">Colombia</option> 
                    </select>
                    <br />
                    
                    <input 
                    type="checkbox"
                    name="vegan"
                    checked={this.state.vegan}
                    onChange={this.handleChange}
                    />Vegan
                    <br />
                    <input 
                    type="checkbox"
                    name="indian"
                    checked={this.state.indian}
                    onChange={this.handleChange}
                    />Indian
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    Vegan: {this.state.vegan ? "Yes" : "No"}, 
                    Indian {this.state.indian ? "Yes" : "No"}
                </p>
            </main>
        )
    }
}

export default App
