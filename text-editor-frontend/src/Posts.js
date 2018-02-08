import React from 'react';
// import { findDOMNode } from 'react-dom';
import $ from 'jquery';
// import {Router, Route} from 'react-router';

// this.handleId = this.handleId.bind(this);  

class Posts extends React.Component {
    render(){
        return (
            <ul>
                {this.props.posts.map(post =>(
                    <li key={post.id}>
                        <div className="titleSpan">{post.title}</div>
                        <div className="contentSpan">{post.content}</div>
                        <button className="deletePost" value={post.id} onClick={this.deleteId.bind(this)}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    }
    deleteId(event) {
        event.preventDefault(); 
        console.log(event.target.value);
        let deleteURL = 'http://localhost:3000/posts/' + event.target.value
        $.ajax({
            type: 'DELETE',
            url: deleteURL,
            dataType: "JSON",
            success: function () {
                console.log('Deleting Post');
            },
            error: function () {
                console.log('error');
            }
        })      
    }
}

export default Posts