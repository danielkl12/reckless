import '../App.css';
import React, { Component } from 'react';
import dan from '../srcimages/dan.jpg'
import mike from '../srcimages/mike.jpg'
import danny from '../srcimages/danny.jpg'
import joe from '../srcimages/joe.jpg'
import mikeg from '../srcimages/mikeg.jpg'
import crowd from '../srcimages/crowd.jpg'

import ReactDOM, { render } from 'react-dom'


// import { Gallery } from 'react-grid-gallery';
// import Imgix from "react-imgix";
// import './style.css';

// const images = [
//   "RAT+3_22+Crem+de+la+crem-047.jpg",
  
 
// ];

// const buildURL = imagePath =>
//   `https://www.dropbox.com/home/reckless?preview=${imagePath}`;
  

// export const Gallery = () => (
//   <div className="gallery">
//     {images.map(image => (
//       <Imgix
//         sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
//         src={buildURL(image)}
//         key={image}
//         imgixParams={{
//           fit: "crop",
//           fm: "jpg"
//         }}
//         width="600"
//         height="600"
//       />
//     ))}
//   </div>
// );

// export default Gallery;

class Gallery extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = { 
          images: [
              {src:'//placeimg.com/600/400?text=1'},
              {src:'//placeimg.com/600/400?text=2'},
              {src:'//placeimg.com/600/400/any'},
              {src:'//placeimg.com/600/400?text=4'},
              {src:'//placeimg.com/600/400?text=5'},
              {src:'//placeimg.com/600/400?text=6'},
          ],
          currentSelection: {},
      };
      this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
      // set first image selected
      this.setState({ currentSelection: this.state.images[0] });
  }
  
  handleClick(val) {
      //console.log(val)
      this.setState({ currentSelection: val });
  }
  
  render(){
      var { images, currentSelection } = this.state;
      return(
      <div>
          <div className="photo-grid">
              <div className="col-md">
                  <div className="no-gutters">
                  {images.map((val, k) => {
                      return (
                      <div className="col-sm-4" key={k}>
                          <img src={val.src} className={'img-fluid ' + (val.src===currentSelection.src?'p-1':'')} onClick={() => this.handleClick(val)} />
                      </div>)
                      })
                  }
                   </div>
              </div>
              <div className="col-md">
                  <h3 className="font-weight-light">{ currentSelection.name }</h3>
                  <p>{ currentSelection.desc }</p>
              </div>
          </div>
      </div>
      )
  }
};

export default Gallery;
// class App extends React.Component {
// render() {
//   return (
//   <div className="container-fluid py-3">
//       <h4 className="text-center font-weight-light text-light mb-3">React Gallery with Bootstrap</h4>
//       <ImageGrid />
//   </div>
//   )
// }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')

// )
