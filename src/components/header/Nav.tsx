import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const t = useTranslations("HeaderNav");

  return (
    <Box className="navigation">
      <Link href={"#Partners"}>{t("partners")}</Link>
      <Link href={"#"}>{t("about")}</Link>
      <Link href={"#"}>{t("benefits")}</Link>
      <Link href={"#"}>{t("contact")}</Link>
    </Box>
  );
};

export default Nav;
