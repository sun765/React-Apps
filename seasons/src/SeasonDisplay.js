import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer:{
        text    : "It's hot lets drink beer!",
        iconName: "sun"
    },
    winter:{
        text    : "It's cold so lets eat hot pot!" ,
        iconName: "snowflake"
    }
}

const getSeason = (month, lat)=>{
    if(month>2 && month < 9){
        return lat>0?"summer" : "winter";
    }
    else{
        return lat>0? "winter" : "summer";
    }
}

const SeasonDisplay = (props)=>{
    const season = getSeason(props.month, props.latitude);
    const{ text, iconName} = seasonConfig[season];

    return (
        <div className = {`season-display ${season}`}>   
            <i className = {`icon-topleft massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className = {`icon-bottomright massive ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;