import React,{Component} from "react";
import {BrowserRouter,Route} from "react-router-dom"
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';
import RecipeDetails from './components/RecipeDetails';
import Navbar from './components/NavBar';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreateRecipe}></Route>
        <Route path="/edit/:id" component={EditRecipe}></Route>
        <Route path="/post/:id"  component={RecipeDetails}></Route>

      </div>
      </BrowserRouter>
    )
  }
}