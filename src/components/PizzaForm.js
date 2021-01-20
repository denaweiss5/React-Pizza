import React from "react"

class PizzaForm extends React.Component{
  constructor(props){
    super(props)

    this.state={
      pizza: props.clickedPizza
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.clickedPizza.id !== this.props.clickedPizza.id){
    this.setState({
      pizza: this.props.clickedPizza
    })
  }
  }

  handleChange = (e) => {
    this.setState({
      pizza: {...this.state.pizza, [e.target.name]: e.target.value}
    })
  }

  submitForm = (e) => {
    const updatedPizza = this.state.pizza
    const id = this.state.pizza.id
    e.preventDefault()
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        updatedPizza
      )
    })
    .then(response => response.json())
    .then(pizza => {
      this.props.changePizza(pizza)
    })

  }


  render(){
    console.log(this.props.clickedPizza)
   
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" onChange={this.handleChange}
            value={this.state.pizza.topping}
            />
        </div>
        <div className="col">
          <select 
          name="size"
          onChange={this.handleChange}
          value={this.state.pizza.size} 
          className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" onChange={this.handleChange} type="radio" value="Vegetarian" 
            checked={this.state.pizza.vegetarian ? true : false}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" 
            name="vegetarian" onChange={this.handleChange}
              checked={this.state.pizza.vegetarian === false? true : false}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.submitForm}>Submit</button>
        </div>
      </div>

  )
  }
}

export default PizzaForm
