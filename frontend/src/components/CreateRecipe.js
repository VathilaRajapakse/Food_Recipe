import React,{Component} from "react";
import axios from "axios";
import "../components/styles/recipe.css"


export default class CreateRecipe extends Component{
  
  constructor(props){
    super(props);
    this.state={
      recipe_id:"",
      recipe_name:"",
      ingredients:"",
      description:"",
      selectedfile:""
    }
  }
  
  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {recipe_id,recipe_name,ingredients,description,selectedfile} = this.state;

    const data = {
      recipe_id:recipe_id,
      recipe_name:recipe_name,
      ingredients:ingredients,
      description:description,
      selectedfile:selectedfile
    }

    console.log(data)

    axios.post("/post/save",data).then((res) =>{
      if(res.data.success){
        this.setState({
        recipe_id:"",
        recipe_name:"",
        ingredients:"",
        description:"",
        selectedfile:""
        })
      }
    })
  }
  
  
  render(){
    return(
      <div className="main-container">
        

        <div className="dropdown"></div>
        <form className="create-form">
          <div>
            <h2 className="invH2">ADD NEW RECIPE</h2>
          </div>
          <div className="create-half">
            <div className="create-item">
              <label className="create-label" for="name">
                RECIPE_ID
              </label>
              <input
                className="create-half-item"
                type="number"
                name="recipe_id"
                id="name"
                value={this.state.recipe_id}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="create-item">
              <label className="create-label" for="email">
                RECIPE_NAME
              </label>
              <input
                className="create-half-item"
                type="text"
                id="email"
                name="recipe_name"
                value={this.state.recipe_name}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="create-half">
            <div className="create-item">
              <label className="create-label" for="name">
                INGREDIENTS
              </label>
              <input
                className="create-half-item"
                type="phone"
                id="name"
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="create-item">
              <label className="create-label" for="name">
                DESCRIPTION
              </label>
              <input
                className="create-half-item"
                type="text"
                id="name"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="create-file">
            <label >
                CHOOSE FILE
              
              <input
                
                type="file"
                id="name"
                name="files"
                value={this.state.selectedfile}
                onChange={this.handleInputChange}
                required
              />
              </label>
              </div>
        
          </div>
          <a href="/">
            <button
              href="/"
              type="submit"
              className="btn btn-primary"
              id="crcbtn"
              onClick={this.onSubmit}
            >
              Add Recipe
            </button>
            
          </a>
        </form>
      </div>
    )
  }
}