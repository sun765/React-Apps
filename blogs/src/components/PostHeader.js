import React from 'react';
import {connect} from 'react-redux';


class PostHeader extends React.Component{
    constructor(props){
        super(props);
        //console.log(this.props);
    }

    componentDidMount(){
        //console.log("header fecth data");
    }

    render(){
        const user = this.props.user;
        if(!user)
            return null;
        return (
            <div>{user.name}</div>
        );
    }
}

const mapStateToProps=(state, ownProps)=>{
    const foundUser = state.users.find(user=>user.id===ownProps.userId);
    return {user: foundUser};
}
export default connect(mapStateToProps)(PostHeader);