import React, { Component } from 'react';
import '../styles/App.css'

export default class ImageDisplay extends Component{

  render(){
    return (
      <div>
        <h2>{this.props.data.rover}</h2>
        <ul className="rover-pics">
          {this.props.data.images.map(function(image){
            // console.log("asdasd", image)
            return <li key={image.id}><img src={image.img_src} alt=""/></li>
          })}
        </ul>
      </div>


    )

  }
}
