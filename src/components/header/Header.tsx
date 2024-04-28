"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import LanguageBtn from "../buttons/LanguageBtn";
import { Box, ButtonGroup } from "@mui/material";
import { HeaderBox, HeaderContentBox } from "./HeaderStyle";
import BurgerMenu from "../burger/BurgerMenu";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1124 ? setBurgerMenu(true) : setBurgerMenu(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [burgerMenu]);

  return (
    <Box sx={{ ...HeaderBox }}>
      {burgerMenu ? (
        <Box className="container" sx={{ ...HeaderContentBox }}>
          <Image width={63} height={27} src="assets/logo.svg" alt="Logo" />
          <BurgerMenu />
        </Box>
      ) : (
        <Box className="container" sx={{ ...HeaderContentBox }}>
          <Image width={63} height={27} src="assets/logo.svg" alt="Logo" />
          <Nav />
          <ButtonGroup className="btnGroup">
            <LanguageBtn content="GEO" languageCode="ge" />
            <LanguageBtn content="ENG" languageCode="en" />
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};

export default Header;
