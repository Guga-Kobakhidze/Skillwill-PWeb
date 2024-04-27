import { SxProps } from "@mui/material";

export const BtnStyle = (color: string, bgColor: string): SxProps => ({
  color: color,
  backgroundColor: bgColor,
  fontFamily: "RocRegular",
  fontWeight: "100",
  fontSize: "18px",
  padding: "10px 55px",
  borderRadius: "12px",

  "&:hover": {
    backgroundColor: bgColor,
    color: color,
  },
});
