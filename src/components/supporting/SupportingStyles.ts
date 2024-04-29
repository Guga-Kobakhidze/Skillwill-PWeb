import { SxProps } from "@mui/material";

export const SupportingBox: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
  marginBottom: "112px",

  "@media (max-width: 1340px)": {
    gap: "20px",
  },

  "@media (max-width: 1240px)": {
    flexDirection: "column",
    gap: "56px",
    marginBottom: "32px",

    ".imageBox": {
      width: "100%",

      img: {
        width: "100%",
        height: "700px",

        "@media (max-width: 767px)": {
          height: "348px",
          marginBottom: "32px",
        },
      },
    },
  },
};

export const Title: SxProps = {
  fontWeight: "700",
  fontSize: "2.9rem",
  lineHeight: "3.6rem",
  marginBottom: "12px",
  fontFamily: "RocBold",

  "@media (max-width: 767px)": {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "120%",
  },
};

export const paragraph: SxProps = {
  color: "rgba(0, 0, 0, 0.6)",
  fontFamily: "RocRegular",
  fontWeight: "lighter",
  fontSize: "18px",
  margin: "12px 0 32px 0",
  lineHeight: "27px",

  "@media (max-width: 767px)": {
    fontSize: "14px",
    lineHeight: "150%",
    marginBottom: "20px",
  },
};

export const supportingTexts: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export const check: SxProps = {
  display: "flex",
  gap: "14px",
  alignItems: "center",

  "@media (max-width: 767px)": {
    alignItems: "start",
  },
};

export const checkContent: SxProps = {
  display: "flex",
  gap: "16px",
  flexDirection: "column",
};

export const checkText: SxProps = {
  fontFamily: "RocRegular",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: "400",
  color: "#1A1919",

  "@media (max-width: 767px)": {
    fontSize: "14px",
  },
};
