import React from "react";
import Companies from "./Companies";
import { LogosData, LogosDatas } from "@/data/LogosData";
import { Box, Typography } from "@mui/material";
import { MarqueeBox } from "./MarqueeStyle";

const Marquee = () => {
  return (
    <MarqueeBox>
      <Typography variant="h5" color={"black"}>
        Trusted by the worlds best companies
      </Typography>
      <Box className="container">
        <Box className="Logos">
          <Companies data={LogosData} />
          <Companies data={LogosDatas} />
        </Box>
      </Box>
    </MarqueeBox>
  );
};

export default Marquee;
