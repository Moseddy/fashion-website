import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarContainer = styled(motion.div)`
  width: 100vw;
  position: absolute;
  top: ${(props) => (props.showNavigation ? "0" : `-${props.theme.navHeight}`)};

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  transition: all 0.5s ease;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

const MenuBar = styled(motion.li)`
  background: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <NavbarContainer
      showNavigation={showNavigation}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <MenuItems 
        drag="y"
        dragConstraints={{
            top: 0,
            bottom: 70
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBar onClick={() => setShowNavigation(!showNavigation)}>
          Menu
        </MenuBar>
        <MenuItem 
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale: 0.9, y:0}}
        >Home</MenuItem>
        <MenuItem 
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale: 0.9, y:0}}
        >Home</MenuItem>
        <MenuItem 
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale: 0.9, y:0}}
        >Home</MenuItem>
        <MenuItem 
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale: 0.9, y:0}}
        >Home</MenuItem>
        <MenuItem 
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale: 0.9, y:0}}
        >Home</MenuItem>
        <MenuItem 
            whileHover={{scale: 1.1, y:-5}}
            whileTap={{scale: 0.9, y:0}}
        >Home</MenuItem>
      </MenuItems>
    </NavbarContainer>
  );
};

export default Navbar;
