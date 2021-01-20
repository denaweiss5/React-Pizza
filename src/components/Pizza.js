import React from "react"

export default class Pizza extends React.Component{

 

  render(){
    const { id, topping, size, vegetarian } = this.props.pizza
    
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => this.props.editPizza(id)}>Edit Pizza</button></td>
    </tr>
  )
  }
}


