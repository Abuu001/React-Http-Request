import React,{Component} from "react"
import axios from "../../../axios"
import Post from "../../../components/Post/Post"
import "./Posts.css"

const JSON_PLACEHOLDER_API='/posts';

class Posts extends Component {

    constructor(){
        super()
        this.state={
            posts:[],
            selectedPostId :null,
            error: false
        }
        this.postSelectedHandler=this.postSelectedHandler.bind(this)
    }

    componentDidMount(){
        axios.get(JSON_PLACEHOLDER_API)
        .then(response=>{
            const post = response.data.slice(0,4);
            const updatedPost=post.map(posts=>{
            return{
                ...posts,
                author: "Max"
            }
            })
    
            this.setState({posts : updatedPost})
            console.log(response);
        }).catch(error=>{
         //   this.setState({error : true })
            console.log(error);
        });
    }


    postSelectedHandler(id){
        this.setState({selectedPostId:id})
    }
    render(){
        let posts =<p style={{textAlign: 'center'}}>Something went wrong !!!</p>
        if(!this.state.error){
            posts=this.state.posts.map(post=>{
              return <Post  
                  key={post.id}  
                  title={post.title} 
                  author={post.author}
                  clicked={()=>this.postSelectedHandler(post.id)}
                  />
          })
        }
        return(
            <section className="Posts">
            {posts}
            </section>
        )
    }
}

export default Posts;
{/* <section>
<FullPost id={this.state.selectedPostId}/>
</section>
<section>
<NewPost />
</section>
 */}
