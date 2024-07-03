import '../App.css';
import React from 'react';
import Imgix from "react-imgix";
import { Helmet } from 'react-helmet';

const images = [
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
];

const Photos = () => {
    return (
        <div id="photos">
            <Helmet>
                <title>Reckless at Tiffany's | Photos</title>
                <meta name="description" content="Check out the latest photos of Reckless at Tiffany's, the premier Minneapolis cover band." />
            </Helmet>
            <div className='photogrid'>
                <Imgix
                    data-aos="fade-left"
                    className='image'
                    src='https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-063.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357468'
                    sizes="(min-width: 500px) 1vw, 1vw"
                    htmlAttributes={{
                        //  width: 200,
                        //  height: 200
                    }}
                />

                <Imgix
                    className='image1'
                    src='https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-031.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357854'
                    sizes="(min-width: 500px) 1.3vw, 1.3vw"
                    htmlAttributes={{
                        //  width: 200,
                        //  height: 200
                    }}
                />

                <Imgix
                    className='image2'
                    src='https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-085.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333358557'
                    sizes="(min-width: 500px) 1vw, 1vw"
                    htmlAttributes={{
                        //  width: 200,
                        //  height: 200
                    }}
                />
                <Imgix
                    className='image3'
                    src='https://ik.imagekit.io/1fhpaowm6/RAT_4-30-22-041.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556835403'
                    sizes="(min-width: 500px) 1.3vw, 1.3vw"
                    htmlAttributes={{
                        //  width: 200,
                        //  height: 200
                    }}
                />
                <Imgix
                    className='image4'
                    src='https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-073.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556998056'
                    sizes="(min-width: 500px) 1vw, 1vw"
                    htmlAttributes={{
                        //  width: 200,
                        //  height: 200
                    }}
                />
                <Imgix
                    className='image5'
                    src='https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-067.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622420513'
                    sizes="(min-width: 500px) 1vw, 1vw"
                    htmlAttributes={{
                        //  width: 200,
                        //  height: 200
                    }}
                />
            </div>
        </div>
    );
};

export default Photos;
