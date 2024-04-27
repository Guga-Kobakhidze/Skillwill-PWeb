import { SxProps } from "@mui/material";

export const SupportingBox: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
//   maxWidth: 650,
  marginBottom: "112px",
};

export const Title: SxProps = {
    fontWeight: "700",
    fontSize: '2.9rem',
    lineHeight: "3.6rem",
    marginBottom: "12px",
    fontFamily: "RocBold",
  };

  export const paragraph: SxProps = {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: "RocGrotesk",
    fontWeight: 'lighter',
    fontSize: '18px',
    margin: '12px 0 32px 0',
    lineHeight: '27px'
  };

  export const supportingTexts: SxProps ={
    display: "flex",
    flexDirection: 'column',
    // maxWidth: 650,

  }

  export const check: SxProps ={
    display: "flex",
    gap: '14px',
    alignItems: 'center'
  }

  export const checkContent: SxProps ={
    display: 'flex',
    gap: '16px',
    flexDirection: 'column'

  }

  export const checkText: SxProps = {
    fontFamily: "RocGrotesk",
    fontSize: '1rem',
    lineHeight: "1.5rem",
    fontWeight: '400',
    color:" rgba(26, 25, 25, 1)"

  }