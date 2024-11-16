import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import Wed from "../assets/Images/wed3.jpg";
import { motion } from "framer-motion";

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }

  h2 {
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const titleVariants = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        
        transition: {
            delayChildren: 2,
            staggerChildren: 0.4,
            // ease: "easeInOut"
        }
    }
}

const item = {
    initial: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
    }
}

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={titleVariants} initial="initial" animate="visible">
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">V</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.11" data-scroll-speed="4">i</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">b</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">e</motion.h1>
        </div>
        <motion.h2 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="3">Inspire. Create. Believe</motion.h2>
      </Title>
      <img src={Wed} alt="" />
      {/* <video>
            <src={MainVideo} />
        </video> */}
    </VideoContainer>
  );
};

export default CoverVideo;
