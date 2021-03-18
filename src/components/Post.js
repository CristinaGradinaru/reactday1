import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
    render() {
        const post = this.props.post
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{post.title}</p>
                        <p className="card-text">{post.content}</p>
                        <h5 className="card-title">{post.date_created.slice(0,11)}</h5>
                        <Link to={`/posts/${post.id}`}>
                            <button className="btn btn-outline-secondary float-end">View Post</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
