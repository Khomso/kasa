import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SlideShow from '../components/Slide';
// import ImageSlider from "../components/ImageSlider";

const Logement = () => {

const house = useLoaderData();
console.log(house);
    // const slides = [];

    // const containerStyles = {
    //     with: "500px",
    //     height: "280px",
    //     margin : "0 auto",
    // }

    return (
        <div>
            {/* <div style={containerStyles}>
              <ImageSlider slides= {slides} />  
            </div> */}
            <SlideShow pictures={house.pictures}/>
        </div>
    );
};

export default Logement;