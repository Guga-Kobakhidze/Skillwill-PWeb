import { Box, Typography } from "@mui/material";
import React from "react";
import {
  check,
  checkContent,
  checkText,
  paragraph,
  SupportingBox,
  supportingTexts,
  Title,
} from "./SupportingStyles";
import { useTranslations } from "next-intl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

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
        <Image
          width={600}
          height={600}
          src="assets/Placeholder.svg"
          alt="Logo"
        />
      </Box>
    </Box>
  );
};

export default Supporting;
