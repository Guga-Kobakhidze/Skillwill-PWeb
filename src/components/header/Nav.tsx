'use client'
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
// import Link from "next/link";
import { Link } from 'react-scroll';
import React from "react";

const Nav = () => {
  const t = useTranslations("HeaderNav");

  return (
    <Box className="navigation">
      <Link to="partners" spy={true} smooth={true} duration={50} offset={-80}>{t("partners")}</Link>
      <Link to="about" spy={true} smooth={true} duration={50} offset={-100}>{t("about")}</Link>
      <Link to="benefits" spy={true} smooth={true} duration={50} offset={-100}>{t("benefits")}</Link>
      <Link to="partners" spy={true} smooth={true} duration={50}>{t("contact")}</Link>
    </Box>
  );
};

export default Nav;
