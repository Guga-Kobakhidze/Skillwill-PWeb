import React from "react";
import { Button } from "@mui/material";
import { BtnStyle } from "./ButtonStyle";
import { ButtonProps } from "../../interfaces/interfaces";

const BtnComponent: React.FC<ButtonProps> = ({
  content,
  variant,
  bgColor,
  onClick,
}) => {
  return (
    <Button
      type={!onClick ? "submit" : "button"}
      onClick={onClick}
      sx={{ ...BtnStyle(bgColor) }}
      variant={variant}
    >
      {content}
    </Button>
  );
};

export default BtnComponent;
