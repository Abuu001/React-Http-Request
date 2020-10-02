import React, { Component } from 'react';
import axios from 'axios'
import './NewPost.css';

const JSON_PLACEHOLDER_API='/posts';
class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
      postHandlerData=()=>{
          const data ={
              title :this.state.title,
              body : this.state.content,
              author :this.state.author
          }
        axios.post(JSON_PLACEHOLDER_API, data)
        .then(response=>{
            console.log(response);
        });
      }
    handleTitleChange=(event)=>{
        const {name,value} = event.target;
        this.setState({
            [ name] :  value
        })
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" name ="title" value={this.state.title} onChange={this.handleTitleChange} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postHandlerData}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;