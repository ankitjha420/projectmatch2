import React from 'react';
import { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import CTAHomePage from './CTAHomePage';
import lottie from "lottie-web"

function HomePage() {

    const container = useRef(null)
    
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./team-animation.json")
        })
    })

    return(
    <div>

    <Navbar />

    <div className="heroSection">
        <h1 className="heroText">
            Collaborate,<br /> 
            Learn,<br /> 
            Make Friends.
        </h1>
        
        <CTAHomePage />

    </div>

    <div className="lottieContainer" ref={container}></div>
    
    </div>)
}

export default HomePage