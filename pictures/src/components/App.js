import React from 'react';
import Unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
    state = {images: []};
    onSearchSubmit=  async (input)=>{
        //this.setState({keyword:input});
        const response = await Unsplash.get("/search/photos",{
            params:{query:input},
        });
        //console.log(response.data.results);
        this.setState({images:response.data.results})
    }
    render(){
        return(
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <ImageList images ={this.state.images}/>
            </div>
        );
    }
}

export default App;