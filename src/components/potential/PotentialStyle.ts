import { SxProps } from "@mui/material";

export const PotentialContent: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
  marginBottom: "112px",

  ".VideoBox": {
    width: "100%",
    borderRadius: "12px",
    overflow: "hidden",
  },

  "@media (max-width: 1240px)": {
    flexDirection: "column",
    gap: "48px",
    marginBottom: "64px",
  },

  "@media (max-width: 767px)": {
    marginTop: "100px",

    ".VideoBox": {
      height: "348px",
    },
  },
};

export const PotentialBox: SxProps = {
  width: "100%",

  h3: {
    fontFamily: "RocBold",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "12px",
  },

  ".paragraph": {
    fontFamily: "RocRegular",
    marginBottom: "22px",
  },

  "@media (max-width: 767px)": {
    h3: {
      fontSize: "32px",
      fontWeight: 500,
      marginBottom: "20px",
    },

    "button, .paragraph": {
      fontSize: "1rem",
    },
  },
};
