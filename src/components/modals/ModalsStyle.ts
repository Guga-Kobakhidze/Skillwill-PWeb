import { SxProps } from "@mui/material";

const Absolute: SxProps = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 20,
};

export const OverLayStyle: SxProps = {
  ...Absolute,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 19,
  width: "200%",
  height: "200%",
};

export const ApplyFormBox: SxProps = {
  ...Absolute,
  padding: "30px 40px",
  backgroundColor: "#fff",
  borderRadius: "6px",

  fieldset: {
    borderRadius: "12px",
  },

  h4: {
    fontFamily: "RocBold",
    marginBottom: "6px",
  },

  h6: {
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "RocRegular",
    marginBottom: "20px",
  },

  ".radioGroup": {
    display: "flex",
    gap: "30px",
    marginBottom: "20px",
  },

  ".fullName": {
    display: "flex",
    gap: "24px",
    marginBottom: "20px",

    div: {
      width: "100%",
    },
  },

  ".closeBtn": {
    cursor: "pointer",
    position: "absolute",
    right: "18px",
    top: "16.5px",
  },
};
