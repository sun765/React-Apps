import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader"

class App extends React.Component{
    state ={latitude : null, errorMessage: ""};
    /*
    constructor(props){
        super(props);
        this.state ={latitude : null, errorMessage: ""};
    }
    */
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({latitude:position.coords.latitude});
            },
            (err)=> {
                this.setState({errorMessage: err.message})
            }
        );
    }

    getRenderContent(){
        if(!this.state.latitude && ! this.state.errorMessage)
            return <Loader message = "Please allow location access!"/>;
        return <SeasonDisplay month = {new Date().getMonth()} latitude = {this.state.latitude}/> ;
    }
    // render
    render(){
        return (
            <div>
                {this.getRenderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)