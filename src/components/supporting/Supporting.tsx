import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import {
  check,
  checkContent,
  checkText,
  paragraph,
  SupportingBox,
  supportingTexts,
  Title,
} from "./SupportingStyles";

const Supporting = () => {
  const t = useTranslations("Supporting");

  return (
    <Box className="container" id="about">
      <Box sx={{ ...SupportingBox }}>
        <Box sx={{ ...supportingTexts }}>
          <Typography variant="h4" sx={{ ...Title }}>
            {t("title")}
          </Typography>
          <Typography variant="body1" sx={{ ...paragraph }}>
            {t("paragraph")}
          </Typography>
          <Box sx={{ ...checkContent }}>
            <Box sx={{ ...check }}>
              <CheckCircleIcon
                style={{ color: "rgba(19, 178, 82, 1)", cursor: "default" }}
              />
              <Typography variant="body1" sx={{ ...checkText }}>
                {t("checkText")}
              </Typography>
            </Box>
            <Box sx={{ ...check }}>
              <CheckCircleIcon
                style={{ color: "rgba(19, 178, 82, 1)", cursor: "default" }}
              />
              <Typography variant="body1" sx={{ ...checkText }}>
                {t("checkText")}
              </Typography>
            </Box>
            <Box sx={{ ...check }}>
              <CheckCircleIcon
                style={{ color: "rgba(19, 178, 82, 1)", cursor: "default" }}
              />
              <Typography variant="body1" sx={{ ...checkText }}>
                {t("checkText")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="imageBox">
          <img src="assets/Placeholder.png" alt="Logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default Supporting;
