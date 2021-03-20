import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../images/10796-clapperboard-investment-movie.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Lottie options={defaultOptions} height={350} width={350}></Lottie>
    </div>
  );
};

export default Loading;
