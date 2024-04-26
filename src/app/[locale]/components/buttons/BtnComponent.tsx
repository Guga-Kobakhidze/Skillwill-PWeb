import React from "react";
import { Button } from "@mui/material";
import { BtnStyle } from "./ButtonStyle";
import { ButtonProps } from "../../interfaces/interfaces";

const BtnComponent: React.FC<ButtonProps> = ({
  content,
  variant,
  bgColor,
  color,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{ ...BtnStyle(color, bgColor) }}
      variant={variant}
    >
      {content}
    </Button>
  );
};

export default BtnComponent;
