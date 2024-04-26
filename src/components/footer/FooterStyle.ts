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
  },

  ".navigation": {
    display: "flex",
    justifyContent: "center",
    gap: "32px",

    a: {
      color: "white",
    },
  },

  ".copyright": {
    display: "flex",
    justifyContent: "space-between",

    div: {
      display: "flex",
      gap: "24px",

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
