import React, {Component} from 'react';
import Posts from './Posts'

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            title: '',
            content: '' 
            };

    this.handleTitle = this.handleTitle.bind(this);       
    this.handleContent = this.handleContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

render() {
    return (
        <div className="Editor">
            <h3 className="title">
                Title
            </h3>
                <form onSubmit={this.handleSubmit}>
                <textarea type="text" className="titleArea" onChange={this.handleTitle} /> 
            <h3 className="content">
                Content
            </h3>
                <textarea type="text" className="contentArea" onChange={this.handleContent} placeholder="500 Characters Max" maxLength="300" />
                <p>{this.state.content.length } character(s)</p>
                <button className="post">Post Now!</button>
                </form>  
            <span className="posts">
                <span className="searchContainer">
                <input className="search" placeholder="Search" />
                </span>
                <Posts posts={this.state.posts} />
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
        event.preventDefault();
        event.target.reset();

        const newPost = {
            title: this.state.title,
            content: this.state.content,
            id: Date.now()
        }
        this.setState(prevState => ({
            posts: prevState.posts.concat(newPost)
        }))
        console.log(newPost);
        }
    }

export default Editor