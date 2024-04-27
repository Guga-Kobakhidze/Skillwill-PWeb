"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { ApplyFormBox } from "./ModalsStyle";
import { ApllyFormProps } from "../../interfaces/interfaces";
import BtnComponent from "../buttons/BtnComponent";

const ApplyForm: React.FC<ApllyFormProps> = ({
  onClose,
  title,
  description,
  email,
  firstName,
  lastName,
  phoneNumber,
  radioCorporate,
  radioPrivate,
  submit,
}) => {
  const RadioPrivateRef = useRef<HTMLInputElement>(null);
  const RadioCorporateRef = useRef<HTMLInputElement>(null);
  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const ProneNumRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const [selectedValue, setSelectedValue] = useState<string>("");
  // const [submitFailed, setSubmitFailed] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedRef =
      selectedValue === "Private Client" || selectedValue === "პირადი კლიენტი"
        ? RadioPrivateRef.current
        : RadioCorporateRef.current;

    if (
      selectedRef &&
      FirstNameRef.current &&
      LastNameRef.current &&
      ProneNumRef.current &&
      EmailRef.current
    ) {
      const submitedForm = {
        client: selectedRef.value,
        firstName: FirstNameRef.current.value,
        lastName: LastNameRef.current.value,
        phoneNumber: ProneNumRef.current.value,
        email: EmailRef.current.value,
      };

      console.log(submitedForm);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ ...ApplyFormBox }} component={"form"} onSubmit={onSubmit}>
      <Box onClick={onClose} className="closeBtn">
        <Image
          width={40}
          height={40}
          src={"/assets/closeBtn.svg"}
          alt="closeBtn"
        />
      </Box>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h6" maxWidth={450}>
        {description}
      </Typography>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedValue}
        onChange={handleRadioChange}
        className="radioGroup"
      >
        <FormControlLabel
          value={radioPrivate}
          control={<Radio inputRef={RadioPrivateRef} />}
          label={radioPrivate}
        />
        <FormControlLabel
          value={radioCorporate}
          control={<Radio inputRef={RadioCorporateRef} />}
          label={radioCorporate}
        />
      </RadioGroup>
      <Box className="fullName">
        <TextField
          label={firstName}
          variant="outlined"
          inputRef={FirstNameRef}
        />
        <TextField label={lastName} variant="outlined" inputRef={LastNameRef} />
      </Box>
      <TextField
        label={phoneNumber}
        variant="outlined"
        fullWidth
        sx={{ mb: "24px" }}
        inputRef={ProneNumRef}
      />
      <TextField
        label={email}
        variant="outlined"
        fullWidth
        sx={{ mb: "40px" }}
        inputRef={EmailRef}
      />
      <Box>
        <BtnComponent
          bgColor="#3D6ECF"
          color="#fff"
          content={submit}
          variant="contained"
        />
      </Box>
    </Box>
  );
};

export default ApplyForm;
