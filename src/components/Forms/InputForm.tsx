import { InputFormProps } from "@/interfaces/interfaces";
import { Box, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const InputForm: React.FC<InputFormProps> = ({
  firstName,
  lastName,
  phoneNumber,
  email,
}) => {
  const t = useTranslations("ApplyForm");

  return (
    <Box>
      <Box className="fullName">
        <TextField
          label={t("firstName")}
          variant="outlined"
          inputRef={firstName}
        />
        <TextField
          label={t("lastName")}
          variant="outlined"
          inputRef={lastName}
        />
      </Box>
      <TextField
        label={t("phoneNumber")}
        variant="outlined"
        fullWidth
        sx={{ mb: "24px" }}
        inputRef={phoneNumber}
      />
      <TextField
        label={t("email")}
        variant="outlined"
        fullWidth
        sx={{ mb: "24px" }}
        inputRef={email}
      />
    </Box>
  );
};

export default InputForm;
