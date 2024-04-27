"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { ApplyFormBox } from "./ModalsStyle";
import { ApllyFormProps } from "../../interfaces/interfaces";
import BtnComponent from "../buttons/BtnComponent";
import Success from "./Success";
import { useTranslations } from "next-intl";
import InputForm from "../Forms/InputForm";

const ApplyForm: React.FC<ApllyFormProps> = ({ onClose }) => {
  const RadioPrivateRef = useRef<HTMLInputElement>(null);
  const RadioCorporateRef = useRef<HTMLInputElement>(null);
  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const PhoneNumRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [submited, setSubmited] = useState<boolean>(false);

  const t = useTranslations("ApplyForm");

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
      PhoneNumRef.current &&
      EmailRef.current
    ) {
      const submitedForm = {
        client: selectedRef.value,
        firstName: FirstNameRef.current.value,
        lastName: LastNameRef.current.value,
        phoneNumber: PhoneNumRef.current.value,
        email: EmailRef.current.value,
      };

      console.log(submitedForm);
      setSubmited(true);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {!submited ? (
        <Box sx={{ ...ApplyFormBox }} component={"form"} onSubmit={onSubmit}>
          <Box onClick={onClose} className="closeBtn">
            <Image
              width={40}
              height={40}
              src={"/assets/closeBtn.svg"}
              alt="closeBtn"
            />
          </Box>
          <Typography variant="h4">{t("title")}</Typography>
          <Typography variant="h6" maxWidth={450}>
            {t("description")}
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
              value={t("radioPrivate")}
              control={<Radio inputRef={RadioPrivateRef} />}
              label={t("radioPrivate")}
            />
            <FormControlLabel
              value={t("radioCorporate")}
              control={<Radio inputRef={RadioCorporateRef} />}
              label={t("radioCorporate")}
            />
          </RadioGroup>
          <InputForm
            firstName={FirstNameRef}
            lastName={LastNameRef}
            phoneNumber={PhoneNumRef}
            email={EmailRef}
          />
          <Box mt={"16px"}>
            <BtnComponent
              bgColor="#3D6ECF"
              color="#fff"
              content={t("submit")}
              variant="contained"
            />
          </Box>
        </Box>
      ) : (
        <Box sx={{ ...ApplyFormBox }}>
          <Success onClose={onClose} />
        </Box>
      )}
    </>
  );
};

export default ApplyForm;
