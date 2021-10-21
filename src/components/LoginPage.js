import React from 'react';
import Navbar from './Navbar';
import LoginBox from './LoginBox';
import { useEffect, useRef } from 'react';
import lottie from "lottie-web"

export default function LoginPage() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./assets/loginlottie.json")
        })
    })

    return(
        <>
            <Navbar 
                active = "login"
            />
            <LoginBox />

            <div className="loginPageLottie" ref={container}>

            </div>

        </>
    )
}