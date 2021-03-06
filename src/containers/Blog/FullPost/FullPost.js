import React, { Component } from 'react';
import './FullPost.css';
import axiox from 'axios'
class FullPost extends Component {
    constructor(){
        super()
        this.state={
            loadedPost :null
        }
    }

    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost  ||  (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axiox.get(`/posts/${this.props.id}`)
                .then(response=>{
                  //  console.log(response);
                  this.setState({loadedPost : response.data})
                })
            }
        }
    }
    deletePostHandler=()=>{
        axiox.delete(`/posts/${this.props.id}`)
        .then(response=>{
            console.warn(response);
        })
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign:'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;