import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

const Post = ()=>{
    return (
        <div className = "ui container comments">
             <ApprovalCard>
                <Comment author = "Sam" imageUrl = {faker.image.avatar()} />
                <Comment author = "Jackson" imageUrl = {faker.image.avatar()} />
                <Comment author = "Jackson" imageUrl = {faker.image.avatar()} />
             </ApprovalCard>

             <Comment author = "Jackson" imageUrl = {faker.image.avatar()} />
             <Comment author = "Brand" imageUrl = {faker.image.avatar()}/>
        </div>
    );
}

ReactDOM.render(
    <Post/>,
    document.querySelector("#root")
)