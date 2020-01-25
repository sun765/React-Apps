import {combineReducers} from 'redux';

const songReducer = ()=>{
    return [
        {title: "Earth song", duration : "3:05"},
        {title: "Beat it",    duration : "4:00"},
        {title: "You are not alone", duration: "3:30"},
        {title: "Billie Jeans", duration: "4:25"}
    ];
}

const songSelectReducer = (selectedSong = null, action) =>{
    if(action.type === "SELECT_SONG"){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers (
    {
        songs: songReducer,
        selectedSong : songSelectReducer
    }
)