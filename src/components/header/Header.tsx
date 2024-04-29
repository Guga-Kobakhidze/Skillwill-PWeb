"use client";

import Nav from "./Nav";
import Image from "next/image";
import LanguageBtn from "../buttons/LanguageBtn";
import BurgerMenu from "../burger/BurgerMenu";
import useLanguage from "@/hooks/useLanguage";
import React, { useEffect, useState } from "react";
import { Box, ButtonGroup } from "@mui/material";
import { HeaderBox, HeaderContentBox } from "./HeaderStyle";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const { language } = useLanguage();

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
            <Box className="btnBox">
              <LanguageBtn
                content="GEO"
                languageCode="ge"
                bold={language === "GE" ? "bold" : ""}
              />
            </Box>
            <Box>
              <LanguageBtn
                content="ENG"
                languageCode="en"
                bold={language === "EN" ? "bold" : ""}
              />
            </Box>
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};

export default Header;
