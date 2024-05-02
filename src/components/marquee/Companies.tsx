import Image from "next/image";
import React from "react";
import { MarqueeCompaniesProps } from "@/interfaces/interfaces";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

const Companies: React.FC<MarqueeCompaniesProps> = ({ data }) => {
  return (
    <Marquee speed={100} gradient={false}>
      <Box className="logos-slide">
        {data.map(({ alt, id, img }) => (
          <Image key={id} width={156} height={19} alt={alt} src={img} />
        ))}
      </Box>
    </Marquee>
  );
};

export default Companies;
