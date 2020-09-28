import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const axios = require('axios');
class Blog extends Component {

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
        }).catch(reject=>{
            console.log(reject);
        });
    }
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;