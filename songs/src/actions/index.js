import React from 'react';

export const selectSong = (song)=>{
    return {
        type: "SELECT_SONG",
        payload: song
    };
};