import React,{Component} from "react";
import axios from "axios";
import "../components/styles/recipe.css"



export default class EditRecipe extends Component{

 
  constructor(props){
    super(props);
    this.state={
      recipe_id:"",
      recipe_name:"",
      ingredients:"",
      description:""
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
    const id = this.props.match.params.id;

    const {recipe_id,recipe_name,ingredients,description} = this.state;

    const data = {
      recipe_id:recipe_id,
      recipe_name:recipe_name,
      ingredients:ingredients,
      description:description
    }

    console.log(data)

    axios.put(`/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Recipe Updated Successfully")
        this.setState({
        recipe_id:"",
        recipe_name:"",
        ingredients:"",
        description:""
        })
      }
    })
  }
  
  
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          recipe_id:res.data.post.recipe_id,
          recipe_name:res.data.post.recipe_name,
          ingredients:res.data.post.ingredients,
          description:res.data.post.description
        });

        console.log(this.state.post)
      }
    });

  }


  render(){
    
    return(
      <div className="main-container">
        

        <div className="dropdown"></div>
        <form className="recipe-form">
          <div>
            <h2 className="invH2">EDIT RECIPE</h2>
          </div>
          <div className="recipe-half">
            <div className="recipe-item">
              <label className="recipe-label" for="name">
                RECIPE_ID
              </label>
              <input
                className="recipe-half-item"
                type="number"
                name="recipe_id"
                id="name"
                value={this.state.recipe_id}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="recipe-item">
              <label className="recipe-label" for="email">
                RECIPE_NAME
              </label>
              <input
                className="recipe-half-item"
                type="text"
                id="email"
                name="recipe_name"
                value={this.state.recipe_name}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="recipe-half">
            <div className="recipe-item">
              <label className="recipe-label" for="name">
                INGREDIENTS
              </label>
              <input
                className="recipe-half-item"
                type="phone"
                id="name"
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="recipe-item">
              <label className="recipe-label" for="name">
                DESCRIPTION
              </label>
              <input
                className="recipe-half-item"
                type="text"
                id="name"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                required
              />
            </div>
        
          </div>
          <a href="/">
            <button
              href="/"
              type="submit"
              className="btn btn-primary"
              id="invbtn"
              onClick={this.onSubmit}
            >
              SUBMIT
            </button>
          </a>
        </form>
      </div>
    )
  }
}