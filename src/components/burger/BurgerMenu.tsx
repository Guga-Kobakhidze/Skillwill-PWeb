"use client";

import { Box, ButtonGroup, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Nav from "../header/Nav";
import LanguageBtn from "../buttons/LanguageBtn";
import { OverLayStyle } from "../modals/ModalsStyle";
import { BurgerBox } from "./BurgerMenuStyle";
import useLanguage from "@/hooks/useLanguage";

const BurgerMenu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const { language } = useLanguage();

  const onClick = () => {
    setMenu(!menu);
  };

  return (
    <Box>
      <Box onClick={onClick}>
        <Image width={24} height={24} src="assets/burgerMenu.svg" alt="Logo" />
      </Box>
      {menu && (
        <Box sx={{ ...BurgerBox }}>
          <Box className="closeBtn" onClick={onClick}>
            <Image
              width={63}
              height={27}
              src="assets/burgerCloseBtn.svg"
              alt="Logo"
            />
          </Box>
          <Box>
            <Image width={63} height={27} src="assets/logo.svg" alt="Logo" />
            <Nav onClose={onClick} />
          </Box>
          <ButtonGroup className="burgerBtnGroup">
            <Box className="langBox firstChild">
              <Box>
                <Image width={24} height={17} src="assets/GE.svg" alt="Logo" />
                <LanguageBtn content="Georgian" languageCode="ge" />
              </Box>
              {language === "GE" && (
                <Image
                  width={17}
                  height={12}
                  src="assets/checked.svg"
                  alt="Logo"
                />
              )}
            </Box>
            <Box className="langBox">
              <Box>
                <Image width={24} height={17} src="assets/GB.svg" alt="Logo" />
                <LanguageBtn content="English" languageCode="en" />
              </Box>
              {language === "EN" && (
                <Image
                  width={17}
                  height={12}
                  src="assets/checked.svg"
                  alt="Logo"
                />
              )}
            </Box>
          </ButtonGroup>
        </Box>
      )}
      {menu && <Box sx={{ ...OverLayStyle }} onClick={onClick}></Box>}
    </Box>
  );
};

export default BurgerMenu;
