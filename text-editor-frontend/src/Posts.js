import React from 'react';
import { API } from './config';
import axios from 'axios';
  

class Posts extends React.Component {
    render(){
        return (
            <ul>
                {this.props.posts.map(post =>(
                    <li key={post.id}>
                        <div className="titleSpan">{post.title}</div>
                        <div className="contentSpan">{post.content}</div>
                        <div className="timeStamp">Sent at {new Date(post.createdAt).toLocaleTimeString()}</div>
                        <button className="editPost" value={post.id} onClick={this.handleEdit.bind(this)}>Edit</button>
                        <button className="deletePost" value={post.id} onClick={this.handleDelete.bind(this)}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    }

    handleDelete(event) {
        event.preventDefault();
        const postToDelete = {
            id: event.target.value,
        }
        axios.delete(`${API}/blog/${postToDelete.id}`, postToDelete)
            .then((result) => {
                // console.log(this)
                // console.log(result)
                this.props.handleDelete(postToDelete.id);
        })
    }

    handleEdit(event){
        event.preventDefault();
    }
}


export default Posts