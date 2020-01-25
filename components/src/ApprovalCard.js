import React from "react";
import ReactDOM from "react-dom";


const ApprovalCard = (Props)=>{
    return (
        <div className = "ui card">
            {Props.children}
            <div className = "extra content">
                <div className= "two button">
                    <div className = "ui basic green button">Approve</div>
                    <div className = "ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;