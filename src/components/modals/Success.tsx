import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { SuccessBox } from "./ModalsStyle";
import Image from "next/image";
import React from "react";
import BtnComponent from "../buttons/BtnComponent";

const Success: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const t = useTranslations("Success");

  return (
    <Box sx={{ ...SuccessBox }}>
      <Image src={"/assets/success.svg"} alt="Success" width={90} height={90} />
      <Typography variant="h4">{t("title")}</Typography>
      <Typography className="paragraph">{t("message")}</Typography>
      <BtnComponent
        bgColor="#3D6ECF"
        color="#fff"
        content={t("btn")}
        variant="contained"
        onClick={onClose}
      />
    </Box>
  );
};

export default Success;
