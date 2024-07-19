import '../App.css';
import React from 'react';
import Imgix from "react-imgix";
import { Helmet } from 'react-helmet';

const images = [
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-063.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357468',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-031.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357854',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-085.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333358557',
    'https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-041.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556835403',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-073.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556998056',
    'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-067.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622420513'
];

const Photos = () => {
    return (
        <div id="photos">
            <Helmet>
                <title>Reckless at Tiffany's | Photos</title>
                <meta name="description" content="Check out the latest photos of Reckless at Tiffany's, the premier Minneapolis cover band." />
                <link rel="canonical" href="http://www.recklessattiffanys.com/photos" />
                <meta property="og:title" content="Reckless at Tiffany's | Photos" />
                <meta property="og:description" content="Check out the latest photos of Reckless at Tiffany's, the premier Minneapolis cover band." />
                <meta property="og:url" content="http://www.recklessattiffanys.com/photos" />
                <meta property="og:image" content="http://www.recklessattiffanys.com/og-image.jpg" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className='photogrid'>
                {images.map((image, index) => (
                    <Imgix
                        key={index}
                        src={image}
                        sizes="(min-width: 500px) 1vw, 1vw"
                        className={`image${index}`}
                        htmlAttributes={{
                            alt: `Reckless at Tiffany's photo ${index + 1}`,
                        }}
                        data-aos="fade-left"
                    />
                ))}
            </div>
        </div>
    );
};

export default Photos;
