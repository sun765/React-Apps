import React from 'react';
import {connect} from 'react-redux';

class SongDetail extends React.Component{
    constructor(props){
        super(props);
    }

    renderDetail=()=>{ 
        const song = this.props.song;
        if(!song){
            return(
                <div>Please Select a Song!</div>
            );
        }
        return(
            <div>
                <div>Details for this song:</div>
                <h1>title  : {song.title}</h1>
                <p>duration: {song.duration}</p>
            </div>

        );
    }

    render(){
        return (
            <div>
                {this.renderDetail()}
            </div>
        );
    }
}

const mapStateToProps= state=>{
    return {song: state.selectedSong};
}
export default connect(mapStateToProps)(SongDetail);