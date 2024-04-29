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
};
