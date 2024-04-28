import { Box, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";
import { ContactBox } from "./ContactStyle";

const Contact = () => {
  const t = useTranslations("FormContent");

  return (
    <Box sx={{ ...ContactBox }} id="contact">
      <Box className="container contactBox">
        <Box className="FormContent">
          <Typography className="title">{t("contactTitle")}</Typography>
          <Typography className="paragraph">{t("contactDesc")}</Typography>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
