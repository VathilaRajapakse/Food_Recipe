import React, { Component } from 'react'
import axios from 'axios';
//import NavBar from "./NavBar";
import "../components/styles/card.css"
import cardpic from "../components/images/image1.jpg"

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[],
    post:[]
  };
}
componentDidMount(){
  this.retriewPosts();
}
retriewPosts(){
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts,
        
      });
      console.log(this.state.posts)
    }
  })
}


onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("“Are you sure you want to delete the recipe?");
    this.retriewPosts();
})
}

  render(){   
    return (  
      
      <div className="main-container">
        <p className='recipe' id='recipe'>All Recipes</p>
        <div className="card-wapper">

            {this.state.posts.map((posts,index,postId) =>(
              <>
              <div className="box1 red" key={index}>
                <h2 className="course-name">Recipe Name</h2>
                <h3 className="course-subname">{posts.recipe_name}</h3>
                <div className="text-box-card1">
                  <h2 className="course-name">Description</h2>
                  <h3 className="course-subname">{posts.description}</h3>
                </div>
                  <img className="course-img1" src={cardpic} alt="" />
                <div className="card-button">
                  <div className="update-card-button">
                  <a
                      href={`/post/${posts._id}`}
                      style={{ textDecoration: "none" , color: "black"}}
                    >
                      <button
                        id="table-button"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="fas fa-edit"></i>&nbsp;View
                      </button>
                    </a>
                  </div>
                  <div className="delete-card-button">
                    {/* <button
                      variant="outlined"
                      color="error"
                      onClick={() => handleClickOpen(data.id)}
                    >
                      Delete
                    </button> */}
                  </div>
                </div>
    </div>
              </>

            ))}

          
        
          </div>
          <button className="btn btn-success" id='btn'><a href="/add" style={{textDecoration:'none',color:'black'}}>Add a recipe</a></button>   
      </div>
      
    )
  }
}
