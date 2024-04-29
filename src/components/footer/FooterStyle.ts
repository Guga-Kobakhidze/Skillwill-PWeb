import { SxProps } from "@mui/material";

export const FooterBox: SxProps = {
  padding: "80px 0",
  backgroundColor: "#1A1A1A",

  ".footer-content": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    paddingBottom: "80px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    marginBottom: "33px",

    "@media (max-width: 767px)": {
      paddingBottom: "48px",
      marginBottom: "25px",
    },

    a: {
      cursor: "pointer",
      transition: "0.3s",

      "&:hover": {
        opacity: 0.4,
      },
    },
  },

  ".navigation": {
    display: "flex",
    justifyContent: "center",
    gap: "32px",

    a: {
      color: "white",
    },

    "@media (max-width: 767px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  ".copyright": {
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: 900px)": {
      flexDirection: "column-reverse",
      alignItems: "center",
      gap: "32px",
    },

    div: {
      display: "flex",
      gap: "24px",

      "@media (max-width: 767px)": {
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      },

      a: {
        textDecoration: "underline",
        color: "white",
        transition: "0.3s",

        "&:hover": {
          opacity: 0.6,
        },
      },
    },
  },
};
