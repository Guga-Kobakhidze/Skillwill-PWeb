import { SxProps } from "@mui/material";

export const BtnStyle = (bgColor: string): SxProps => ({
  color: "#fff",
  backgroundColor: bgColor,
  fontFamily: "RocRegular",
  fontWeight: "100",
  fontSize: "18px",
  padding: "10px 55px",
  borderRadius: "12px",

  "&:hover": {
    backgroundColor: bgColor,
    color: "#fff",
  },
});
