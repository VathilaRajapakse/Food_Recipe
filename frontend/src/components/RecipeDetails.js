import React, { Component } from 'react'
import axios from 'axios';
//import NavBar from "./NavBar";
import "../components/styles/card.css"
import cardpic from "../components/images/image1.jpg"

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    
    post:{}
  };
}
componentDidMount(){
  this.retriewPosts();
}
retriewPosts(){

  const id = this.props.match.params.id;

  axios.get(`/post/${id}`).then((res) =>{
    if(res.data.success){
      this.setState({
        post:res.data.post
      });

      //console.log(this.state.post);
    }
  })
  // this.retriewPosts();
}
// retriewPosts(){

 
//   axios.get("/posts/").then(res =>{
//     if(res.data.success){
//       this.setState({
//         posts:res.data.existingPosts
//       });
//       console.log(this.state.posts)
//     }
//   })
// }




onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("Are you sure you want to delete the recipe?");
    this.retriewPosts();
})
}

  render(){ 
    const {recipe_id,recipe_name,ingredients,description,_id} =this.state.post
    return (  
      <div className="main-container">
        <p id='recipe1'>Selected Recipe</p>
        <div className="card-wapper" id=''>

            {/* {this.state.posts.map((posts,index) =>( */}
              <>
              <div className="box1" id='box' >
              <h3 className="course-name">Recipe ID</h3>
                <h3 className="course-subname">{recipe_id}</h3>
                <h3 className="course-name">Recipe Name</h3>
                <h3 className="course-subname">{recipe_name}</h3>
                <div className="text-box-card1">
                <h3 className="course-name">Ingredients</h3>
                <h3 className="course-subname">{ingredients}</h3>
                  <h3 className="course-name">Description</h3>
                  <h4 className="course-subname">{description}</h4>
                </div>
                  <img className="course-img1" id='pic' src={cardpic} alt="" />
                <div className="card-button">
                  <div className="update-card-button">
                  <a
                      href={`/edit/${_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        id="update"
                        className="btn btn-outline-primary btn-sm" 
                      >
                        <i className="fas fa-edit"></i>&nbsp;EDIT
                      </button>
                    </a>
                  </div>
                  <div className="delete-card-button">
                    <button
                      id='delete'
                      variant="outlined"
                      color="error"
                      onClick={() => this.onDelete(_id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
              </>

            

          
        
          </div>
            
      </div>
      
    )
  }
}
