import '../App.css';
import React, { Component } from 'react';
import dan from '../srcimages/dan.jpg'
import mike from '../srcimages/mike.jpg'
import danny from '../srcimages/danny.jpg'
import joe from '../srcimages/joe.jpg'
import mikeg from '../srcimages/mikeg.jpg'
import crowd from '../srcimages/crowd.jpg'
import ReactPhotoGrid from 'react-photo-grid';

var imageData = [
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-073.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556998056',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-041.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556835403',
    'https://ik.imagekit.io/1fhpaowm6/mikephotogrid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556454471',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-083.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675557086900',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-106.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622417708',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-110.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622417434',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-083.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675557086900',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-041.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556835403',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-098.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622418774',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-072.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622420188',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-067.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622420513',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-115.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333351630',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-039.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333354421',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-067.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333355916',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-063.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357468',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-111.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357755',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-031.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357854',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-085.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333358557'
]

export default class Photos extends Component {

    
    //renders about page with profile picture, about me sections, etc
    render() {
        
        return (
            <div className='photogrid'>
            <ReactPhotoGrid
            onImageClick={this.handleImageClick}
            data={imageData} 
            gridSize="1000x800"
            containerWidth={1200}
            
            
            />

            </div>

        );

    }
}