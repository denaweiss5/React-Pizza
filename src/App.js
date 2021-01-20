import React, { Component } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(){
    super()

    this.state={
      pizzas: [], 
      clickedPizza: {}
    }
  }

  editPizza = (id) => {
    return this.state.pizzas.map(pizza => {
      if (pizza.id === id)
      this.setState({
        clickedPizza: pizza
    })
    
  })
}

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(response => response.json())
    .then(pizzasArr => {
      console.log(pizzasArr)
      this.setState({
        pizzas: pizzasArr 
      })
    })
}

changePizza = (newPizza) => {
  const newPizzas = this.state.pizzas.map(pizzaObj => {
   if (pizzaObj.id === newPizza.id){
     return newPizza 
   } else {
     return pizzaObj
   }
  })
  this.setState({
    pizzas: newPizzas
  })
}

  

  render() {
    return (
      <div>
        <Header/>
        <PizzaForm pizzas={this.state.pizzas} clickedPizza={this.state.clickedPizza} changePizza={this.changePizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </div>
    );
  }
}

export default App;
