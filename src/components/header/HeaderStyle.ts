import { SxProps } from "@mui/material";

const FlexBox: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const HeaderBox: SxProps = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "22.5px 0",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  zIndex: 10,

  ".btnGroup": {
    ...FlexBox,

    button: {
      padding: 0,
      margin: 0,
    },

    ".btnBox": {
      position: "relative",
      paddingRight: "2px",
      marginRight: "2px",

      "&::after": {
        content: "''",
        position: "absolute",
        right: 0,
        bottom: "6px",
        height: "60%",
        width: "1px",
        background: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
};

export const HeaderContentBox: SxProps = {
  ...FlexBox,
  justifyContent: "space-between",

  ".navigation": {
    ...FlexBox,
    gap: "25px",
    cursor: "pointer",

    a: {
      fontFamily: "RocRegular",
      color: "black",
      fontSize: 16,
      lineHeight: "150%",
      fontWeight: 500,
      textDecoration: "none",
      transition: "0.3s",

      "&:hover": {
        color: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
};
