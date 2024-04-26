import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { PotentialBox, PotentialContent } from "./PotentialStyle";
import React from "react";
import BtnComponent from "../buttons/BtnComponent";

const Potential = () => {
  const t = useTranslations("Potential");

  return (
    <Box mt={15} sx={{ ...PotentialContent }}>
      <Box sx={{ ...PotentialBox }}>
        <Typography variant="h3">{t("title")}</Typography>
        <Typography className="paragraph" variant="body1">
          {t("text")}
        </Typography>
        <BtnComponent
          content={t("button")}
          variant="contained"
          bgColor="#3D6ECF"
          color="#fff"
        />
      </Box>
      <Box className="VideoBox">
        <iframe
          width="100%"
          height="640"
          src="https://www.youtube.com/embed/fzxEECHnsvU?si=635UB-BM9qKrUoWX&autoplay=true&mute=true"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Potential;
