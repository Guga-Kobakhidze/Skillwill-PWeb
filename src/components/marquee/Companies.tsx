import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { MarqueeCompaniesProps } from "@/interfaces/interfaces";

const Companies: React.FC<MarqueeCompaniesProps> = ({ data }) => {
  return (
    <Marquee speed={80} gradient={false} className="logos-slide">
      {data.map(({ alt, id, img }) => (
        <Image key={id} width={156} height={19} alt={alt} src={img} />
      ))}
    </Marquee>
  );
};

export default Companies;
