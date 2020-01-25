import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component{
   
    render(){
        console.log(this.props);
        const images = this.props.images.map(image=>{
            return <ImageCard key = {image.id} url={image.urls.regular} description ={image.description}/>
        });
        return <div className = "image-list">{images}</div>
    }
}

export default ImageList;