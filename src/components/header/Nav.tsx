"use client";

import React from "react";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";

const Nav: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const t = useTranslations("HeaderNav");

  return (
    <Box className="navigation">
      <Link
        to="partners"
        spy={true}
        smooth={true}
        duration={50}
        offset={-80}
        onClick={onClose}
      >
        {t("partners")}
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={50}
        offset={-100}
        onClick={onClose}
      >
        {t("about")}
      </Link>
      <Link
        to="benefits"
        spy={true}
        smooth={true}
        duration={50}
        offset={-100}
        onClick={onClose}
      >
        {t("benefits")}
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={50}
        onClick={onClose}
      >
        {t("contact")}
      </Link>
    </Box>
  );
};

export default Nav;
