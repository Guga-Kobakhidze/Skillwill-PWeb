import { SxProps } from "@mui/material";

export const BurgerBox: SxProps = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "328px",
  height: "100%",
  backgroundColor: "white",
  zIndex: 20,
  padding: "22px 16px 66px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  ".closeBtn": {
    position: "absolute",
    right: 0,
    top: "22px",
  },

  ".navigation": {
    flexDirection: "column",
    alignItems: "start",
    marginTop: "48px",
    gap: 0,

    a: {
      display: "inline-block",
      paddingBottom: "15px",
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
      marginBottom: "20px",
      width: "100%",
    },
  },

  ".burgerBtnGroup": {
    display: "flex",
    flexDirection: "column",

    ".langBox": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "8px",
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },

    ".firstChild": {
      marginBottom: "8px",
    },
  },
};
