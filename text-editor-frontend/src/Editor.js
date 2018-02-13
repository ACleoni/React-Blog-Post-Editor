import React, {Component} from 'react';
import Posts from './Posts';
import axios from 'axios'; 
import { API } from './config';


class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            title: '',
            content: '' ,
            isEnabled: false,
            isEditing: false,
            };
    
    this.handleTitle = this.handleTitle.bind(this);       
    this.handleContent = this.handleContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

}

componentDidMount(){
  setInterval(() => {
    axios.get(`${API}/blog`)
    .then(res => res.data)
    .then(posts => {
        this.setState({
        posts: posts,
        currentIndex: 0
        })
    })
  }, 1000); 
}

render() {
    return (
        <div className="Editor">
            <h3 className="title">
                Title
            </h3>
                <form onSubmit={this.handleSubmit}>
                <input type="text" className="titleArea" onChange={this.handleTitle} /> 
            <h3 className="content">
                Content
            </h3>
                <textarea type="text" className="contentArea" onChange={this.handleContent} placeholder="250 Characters Max" maxLength="250" />
                <p>{this.state.content.length } character(s)</p>
                <button disabled={this.isEnabled} className="post">Post Now!</button>
                </form>  
            <span className="posts">
                <span className="searchContainer">
                <input className="search" placeholder="Search" />
                </span>
                <Posts posts={this.state.posts} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
            </span>
        </div>
    )
}     

    handleContent(event) {
        this.setState({content: event.target.value});
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    handleSubmit(event) {
        // debugger;
        event.preventDefault();
        

        const newPost = {
            title: this.state.title,
            content: this.state.content
        }
        axios.post(`${API}/blog`, newPost)
            .then(res => res.data)
            .then(post => {
                this.setState(prevState => ({
                posts: prevState.posts.concat(post)
            }))
            console.log(post)
        })
        event.target.reset();
    }

    handleDelete(id){
        // console.log("Post " + this.state.id + " removed")
        this.setState({
            posts: this.state.posts.filter(post =>{
                return post.id !== id;
            })
        })
            alert("Post " + id + " removed")
    }

    handleEdit(v){
        this.setState = ({
            posts: this.state.posts.map(post =>{
                return post
            })
        })
    }
}

export default Editor