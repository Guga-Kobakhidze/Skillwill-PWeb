import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import LanguageBtn from "../buttons/LanguageBtn";
import { Box, ButtonGroup } from "@mui/material";
import { HeaderBox, HeaderContentBox } from "./HeaderStyle";

const Header = () => {
  return (
    <Box sx={{ ...HeaderBox }}>
      <Box className="container" sx={{ ...HeaderContentBox }}>
        <Image width={63} height={27} src="assets/logo.svg" alt="Logo" />
        <Nav />
        <ButtonGroup className="btnGroup">
          <LanguageBtn content="GEO" languageCode="ge" />
          <LanguageBtn content="ENG" languageCode="en" />
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Header;
