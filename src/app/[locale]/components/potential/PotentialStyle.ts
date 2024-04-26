import { SxProps } from "@mui/material";

export const PotentialContent: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
  marginBottom: "112px",

  ".VideoBox": {
    width: "100%",
    borderRadius: "12px",
    overflow: "hidden",
  },
};

export const PotentialBox: SxProps = {
  maxWidth: 560,

  h3: {
    fontFamily: "RocBold",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "12px",
  },

  ".paragraph": {
    fontFamily: "RocRegular",
    marginBottom: "24px",
  },
};
