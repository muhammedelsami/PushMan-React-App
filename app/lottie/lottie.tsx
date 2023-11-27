// components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from "@/public/animation.json";

const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie {...defaultOptions} height={50} width={50} />;
};

export default LottieAnimation;
