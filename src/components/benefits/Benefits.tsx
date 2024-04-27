import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import SingleBenefit from "./SingleBenefit";
import { benefitsBox } from "./BenefitsStyles";

const Benefits = () => {
  const t = useTranslations("Benefits");
  return (
    <Box className="container">
      <Box
        id="benefits"
        className="box"
        // pt={"112px"}
        sx={{ flexDirection: "column" }}
      >
        <Typography className="title">{t("title")}</Typography>
        <Box sx={{ ...benefitsBox }}>
          <SingleBenefit
            img="assets/assuarence.svg"
            title={`${t("qualityTitle")}`}
            paragraph={`${t("qualityText")}`}
          />
          <SingleBenefit
            img="assets/medal.svg"
            title={`${t("trustTitle")}`}
            paragraph={`${t("trustText")}`}
          />
          <SingleBenefit
            img="assets/integrity.svg"
            title={`${t("integrityTitle")}`}
            paragraph={`${t("integrityText")}`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;
