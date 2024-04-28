import { SxProps } from "@mui/material";

export const ContactBox: SxProps = {
  padding: "112px 0",
  backgroundColor: "#F5F7F8",

  ".contactBox": {
    display: "flex",
    justifyContent: "center",

    ".FormContent": {
      maxWidth: "560px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "24px",
    },
  },

  h3: {
    fontFamily: "RocBold",
  },

  fieldset: {
    borderRadius: "12px",
  },

  ".fullName": {
    display: "flex",
    gap: "24px",
    marginBottom: "20px",

    div: {
      width: "100%",
    },
  },

  ".myCheckbox": {
    padding: "0 5px 0 10px",
  },

  ".Terms": {
    a: {
      marginLeft: "4px",
      textDecoration: "underline",
      color: "#3D6ECF",

      "&:hover": {
        opacity: 0.6,
      },
    },
  },
};
