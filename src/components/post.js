import React, { Component } from 'react';
import {fetchPosts} from '../actions/postAction';
import {connect} from 'react-redux';

class Post extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.props.posts.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h2>post</h2>
                {postItems}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Post);