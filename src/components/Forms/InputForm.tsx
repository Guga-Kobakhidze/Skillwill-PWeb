import React from "react";
import { InputFormProps } from "@/interfaces/interfaces";
import { Box, TextField } from "@mui/material";
import { useTranslations } from "next-intl";

const InputForm: React.FC<InputFormProps> = ({
  firstName,
  lastName,
  phoneNumber,
  email,
}) => {
  const t = useTranslations("FormContent");

  return (
    <Box className="formBox">
      <Box className="fullName">
        <TextField
          label={t("firstName")}
          variant="outlined"
          inputRef={firstName}
          name="user_name"
        />
        <TextField
          label={t("lastName")}
          variant="outlined"
          inputRef={lastName}
          name="user_lastName"
        />
      </Box>
      <TextField
        label={t("phoneNumber")}
        variant="outlined"
        fullWidth
        sx={{ mb: "24px" }}
        inputRef={phoneNumber}
        name="user_phone"
      />
      <TextField
        label={t("email")}
        variant="outlined"
        fullWidth
        sx={{ mb: "24px" }}
        inputRef={email}
        name="user_email"
      />
    </Box>
  );
};

export default InputForm;
