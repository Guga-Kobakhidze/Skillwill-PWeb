import { SxProps } from "@mui/material";

export const BenefitsBoxStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "80px",
  marginBottom: "112px",

  ".mainTitle": {
    fontWeight: 700,
    fontSize: "2.9rem",
    lineHeight: "3.6rem",
    fontFamily: "RocBold",
  },

  "@media (max-width: 1240px)": {
    gap: "48px",
    marginBottom: "64px",
  },
};

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
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "48px",
};
