import Image from "next/image";
import React from "react";
import { Benefits } from "@/interfaces/interfaces";
import { Box, Typography } from "@mui/material";
import { sinleBenefitBox, titleSm } from "./BenefitsStyles";

const SingleBenefit: React.FC<Benefits> = ({ title, paragraph, img }) => {
  return (
    <Box sx={{ ...sinleBenefitBox }}>
      <Image width={48} height={48} src={`${img}`} alt="icon" />
      <Typography sx={{ ...titleSm }}>{title}</Typography>
      <Typography className="paragraph">{paragraph}</Typography>
    </Box>
  );
};

export default SingleBenefit;
