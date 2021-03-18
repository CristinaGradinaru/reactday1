import React, { Component } from 'react'
import Post from "../components/Post"

export default class Posts extends Component {
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:5000/blog/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts:data }))
            .catch(error => console.log(error))

    }
    render() {

        return (
            <div>
            <div className="row">
                {this.state.posts.map(post => <Post key = {post.id} post={post}/>)}
            </div>
            </div>
        )
    }
}
