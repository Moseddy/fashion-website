import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontBig};
  font-family: ${(props) => props.theme.fontKaushan};
  font-weight: 300;
  position: absolute;
  left: 5%;
  top: 1rem;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }

  .small-img-2 {
  width: 40%;
  position: absolute;
  left: 80%;
  top: 30%;
  }
`;
const About = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We're fashion studio based in california. We create unique designs that
        will blow your mind. We also design unique jewellary pieces. Fashion is
        an ART that can not be grasped by everyone.
        <br />
        <br />
        We are very dedicated to making our products. We offer unique and
        creative products to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We
        specialize in making things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As a fashion label, we do our best to
        create amazing experiences for all people. We are always looking to make
        something that is easy for everyone.
      </Left>
      <Right>
        <img src={img1} alt="About us" />
        <img
        data-scroll
        data-scroll-speed="5"
        src={img2} alt="About us" className="small-img-1" />
        <img
        data-scroll
        data-scroll-speed="-2"
        src={img3} alt="About us" className="small-img-2" />
      </Right>
    </Section>
  );
};

export default About;
