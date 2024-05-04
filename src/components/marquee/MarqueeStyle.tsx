"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const MarqueeBox = styled(Box)({
  textAlign: "center",
  padding: "80px 0",
  backgroundColor: "#F5F7F8",
  marginBottom: "112px",

  h5: {
    fontSize: "18px",
    fontFamily: "RocRegular",
    marginBottom: "48px",
  },

  ".Logos": {
    display: "flex",
    overflow: "hidden",

    ".logos-slide": {
      img: {
        margin: "0 40px",
      },
    },

    "@media (max-width: 768px)": {
      ".logos-slide": {
        zIndex: 10,

        img: {
          margin: "0 20px",
        },
      },
    },
  },

  "@media (max-width: 1240px)": {
    marginBottom: "32px",
  },

  "@media (max-width: 767px)": {
    padding: "48px 0",

    h5: {
      fontSize: "16px",
    },
  },
});
