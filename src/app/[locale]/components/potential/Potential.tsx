import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { PotentialBox, PotentialContent } from "./PotentialStyle";
import React from "react";
import ApplyModal from "../modals/ApplyModal";

const Potential = () => {
  const tPotential = useTranslations("Potential");
  const tApplyForm = useTranslations("ApplyForm");

  return (
    <Box mt={15} sx={{ ...PotentialContent }}>
      <Box sx={{ ...PotentialBox }}>
        <Typography variant="h3">{tPotential("title")}</Typography>
        <Typography className="paragraph" variant="body1">
          {tPotential("text")}
        </Typography>
        <ApplyModal
          btnContent={tPotential("button")}
          title={tApplyForm("title")}
          description={tApplyForm("description")}
          radioPrivate={tApplyForm("radioPrivate")}
          radioCorporate={tApplyForm("radioCorporate")}
          firstName={tApplyForm("firstName")}
          lastName={tApplyForm("lastName")}
          phoneNumber={tApplyForm("phoneNumber")}
          email={tApplyForm("email")}
          submit={tApplyForm("submit")}
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
