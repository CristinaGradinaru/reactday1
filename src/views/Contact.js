import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
                <div className="card">
                    <p>Name: {this.props.contact[0]}</p>
                    <p>Phone: {this.props.contact[1]}</p>
                    <p>Address: {this.props.contact[2]}</p>
                </div>

        )
    }
}
