import React from 'react';


class SearchBar extends React.Component{
    state = { term: ""};

    onInputChange = (event)=>{
        this.setState({term: event.target.value});
    }

    onSubmitForm=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className = "ui segement">
                <form onSubmit ={this.onSubmitForm} className = "ui form" >
                    <div className = "field">
                        <label>Image Search</label>
                        <input type = "text" 
                         value = {this.state.term.toUpperCase()}
                         onChange = {this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    } 
}

export default SearchBar;