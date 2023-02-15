import '../App.css';
import React, { Component } from 'react';
import dan from '../srcimages/dan.jpg'
import mike from '../srcimages/mike.jpg'
import danny from '../srcimages/danny.jpg'
import joe from '../srcimages/joe.jpg'
import mikeg from '../srcimages/mikeg.jpg'
import crowd from '../srcimages/crowd.jpg'

export default class Photos extends Component {



    //renders about page with profile picture, about me sections, etc
    render() {

        return (
            <section id="photos">
                <div className="row">
                    <div className="columns">


                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Photos</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 

                        </div>

        <div>  
                <section id="card" class="cards">
                        <article className="card">

                            <img src={dan} alt="dan" id='dan' style={{marginRight:"30px"}}/>
                        </article>


                        <article className="card">
                            <img src={mike} alt="mike" id='mike'/>
                        </article>

                        <article className="card">
                            <img src={danny} alt="danny" id='danny' style={{marginLeft:"30px"}}/>
                        </article>

                        <article className="card">
                            <img src={joe} alt="joe" id='joe' style={{marginLeft:"30px"}}/>
                        </article>

                        <article className="card">
                            <img src={mikeg} alt="mikeg" id='mikeg' style={{marginLeft:"30px"}}/>
                        </article>
                        <article className="card">
                            <img src={crowd} alt="crowds" id='crowd' style={{marginLeft:"30px"}}/>
                        </article>



                </section>
        </div>  







                        <div className="row">
                            <div className="columns contact-details">





                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}











// import { Gallery } from "react-grid-gallery";

// const images = [
//    {
//       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//       width: 320,
//       height: 174,
//       isSelected: true,
//       caption: "After Rain (Jeshu John - designerspics.com)",
//    },
//    {
//       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//       width: 320,
//       height: 212,
//       tags: [
//          { value: "Ocean", title: "Ocean" },
//          { value: "People", title: "People" },
//       ],
//       alt: "Boats (Jeshu John - designerspics.com)",
//    },

//    {
//       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//       width: 320,
//       height: 212,
//    },
// ];

// <Gallery images={images} />


// export default Gallery;






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