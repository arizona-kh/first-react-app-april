import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import HomeSlider from './Slider/HomeSlider';


export default function Home () {
    
    return (
        <Fragment>
            <NavBar />
            <HomeSlider />
        </Fragment>
    )
}