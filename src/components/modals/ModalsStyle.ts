import { SxProps } from "@mui/material";

const Absolute: SxProps = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 20,
};

const AbsoluteMobile: SxProps = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
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
  padding: "30px 40px",
  backgroundColor: "#fff",
  borderRadius: "6px",

  "@media (max-width: 1070px)": {
    width: "550px",
  },

  "@media (min-width: 540px)": {
    ...Absolute,
  },

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

  "@media (max-width: 539px)": {
    ...AbsoluteMobile,
    padding: "30px 20px",
    width: "100%",

    ".closeBtn": {
      display: "none",
    },

    h4: {
      fontSize: "32px",
    },

    h6: {
      fontSize: "16px",
    },

    ".radioGroup, .fullName, h6": {
      marginBottom: "16px",
    },

    ".btnBox": {
      marginTop: 0,
    },
  },

  "@media (max-width: 400px)": {
    ".radioGroup": {
      gap: 0,
      justifyContent: "space-between",
    },
  },
};

export const SuccessBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  img: {
    marginBottom: "24px",
  },

  h4: {
    fontFamily: "RocBold",
    marginBottom: "15px",
  },

  ".paragraph": {
    marginBottom: "40px",
    maxWidth: "430px",
    textAlign: "center",
  },

  button: {
    width: "260px",
  },

  "@media (max-width: 539px)": {
    h4: {
      fontSize: "32px",
    },
  },
};
