import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    
    onButtonClick = (song)=>{
        this.props.selectSong(song);
        console.log(this.props);
    }  
    renderSongList = ()=>{
        return this.props.songs.map(song=>{
            return (
                <div className="item" key = {song.title}>
                    <div className = "right floated content">
                        <button className = "ui button primary"  onClick = {()=>{
                             this.props.selectSong(song);
                        }}> 
                            Select
                        </button>
                    </div>
                    <div className = "content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }
    render (){
        return (
            <div className = "ui dividec list">
                {this.renderSongList()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
                songs:      state.songs
                //selectedSong: state.selectedSong
           };
}

export default connect(mapStateToProps,
    {selectSong: selectSong})(SongList);