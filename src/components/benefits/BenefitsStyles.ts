import { SxProps } from "@mui/material";

export const sinleBenefitBox: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "24px",
  textAlign: "center",

  ".paragraph": {
    maxWidth: "405px",
    height: "96px",
    display: "flex",
    alignItems: "start",
  },
};

export const titleSm: SxProps = {
  fontFamily: "RocRegular",
  fontSize: "1.5rem",
  fontWeight: "700",
  lineHeight: "2rem",
};

export const benefitsBox: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "48px",
};
