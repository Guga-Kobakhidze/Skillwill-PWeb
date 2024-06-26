import React from "react";
import ApplyModal from "../modals/ApplyModal";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { PotentialBox, PotentialContent } from "./PotentialStyle";

const Potential = () => {
  const t = useTranslations("Potential");

  return (
    <Box className="container">
      <Box mt={15} sx={{ ...PotentialContent }}>
        <Box sx={{ ...PotentialBox }}>
          <Typography variant="h3">{t("title")}</Typography>
          <Typography className="paragraph" variant="body1">
            {t("text")}
          </Typography>
          <ApplyModal btnContent={t("button")} />
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
    </Box>
  );
};

export default Potential;
