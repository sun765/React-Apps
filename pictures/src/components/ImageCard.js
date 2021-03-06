import React from 'react';


class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        //console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = ()=>{
        const height = this.imageRef.current.clientHeight;
        const spans =Math.ceil(height/10) ;
        this.setState({spans});
    }

    render(){
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img src = {this.props.url} alt = {this.props.description} ref = {this.imageRef}></img>
            </div>
        );

    } 
}

export default ImageCard;