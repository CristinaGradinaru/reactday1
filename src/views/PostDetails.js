import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostDetails extends Component {
    constructor(){
        super();
        this.state={
            posts:{}
        }
    }
    componentDidMount(){
        fetch(`http://localhost:5000/blog/posts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({posts:data}))
            .catch(error => console.log(error))
    }

    render() {
        const post = this.state.posts
        return (
            <div>
                <h2>
                    {post.title}
                </h2>
                <h3>
                    {post.content}
                </h3>
                <h6>{post.date_created}</h6>
                <Link to="/posts"><button className="btn btn-outline-secondary" >Back to posts</button></Link>

            </div>
        )
    }
}
