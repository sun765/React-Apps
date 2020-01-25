import faker from "faker";
import React from "react";
import RectDOM from "react-dom";


const Comment = (Props) =>{
    return (
        <div className = "comment">
                <a href = "/" className = "avatar">
                    <img alt="avatar" src = {Props.imageUrl}/>
                </a>
                <div className = "content">
                    <a href = "/" className = "author">
                        {Props.author}
                    </a>
                    <div className = "metadata">
                        <span className = "date">Today at 6:00PM</span>
                    </div>
                    <div className = "text"> Nice blog post!</div>
                </div>
        </div>
    );
}

export default Comment;