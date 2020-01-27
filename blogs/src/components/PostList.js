import React from 'react';
import {connect} from 'react-redux';
import {fecthPosts, fecthUsers} from '../actions';
import PostHeader from './PostHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchUsers();
    }

    renderPostLists(){
        
        return this.props.posts.map(post=>{
            return (
                <div className = "item" key = {post.id}>
                    <i className = "large middle aligned icon user" />
                    <div className = "content">
                        <div className = "description">
                            <h2>{post.title}</h2>
                            <p> {post.body} </p>
                        </div>
                        <PostHeader userId = {post.userId}/>
                    </div>
                </div>
            )
        });
    }
    render(){
        return (
            <div  className="ui relaxed divided list">{this.renderPostLists()}</div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {posts:state.posts }
}
export default connect(mapStateToProps,
                      {fetchPosts: fecthPosts,
                       fetchUsers: fecthUsers})
                      (PostList);