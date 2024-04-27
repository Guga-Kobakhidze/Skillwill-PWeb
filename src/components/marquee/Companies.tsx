import { MarqueeCompaniesProps } from "@/interfaces/interfaces";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Companies: React.FC<MarqueeCompaniesProps> = ({ data }) => {
  return (
    <Box className="logos-slide">
      {data.map(({ alt, id, img }) => (
        <Image key={id} width={156} height={19} alt={alt} src={img} />
      ))}
    </Box>
  );
};

export default Companies;
