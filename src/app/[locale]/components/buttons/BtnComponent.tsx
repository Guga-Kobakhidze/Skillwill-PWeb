import { Button } from "@mui/material";
import { BtnStyle } from "./ButtonStyle";
import React from "react";

type ButtonVariant = "text" | "outlined" | "contained";

interface ButtonProps {
  variant: ButtonVariant;
  content: string;
  bgColor: string;
  color: string;
  onClick?: () => void;
}

const BtnComponent: React.FC<ButtonProps> = ({
  content,
  variant,
  bgColor,
  color,
  onClick,
}) => {
  return (
    <Button sx={{ ...BtnStyle(color, bgColor) }} variant={variant}>
      {content}
    </Button>
  );
};

export default BtnComponent;
