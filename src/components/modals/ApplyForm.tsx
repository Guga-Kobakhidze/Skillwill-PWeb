"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import BtnComponent from "../buttons/BtnComponent";
import Success from "./Success";
import InputForm from "../forms/InputForm";
import useForm from "@/hooks/useForm";
import { ApplyFormBox } from "./ModalsStyle";
import { ApllyFormProps } from "../../interfaces/interfaces";
import { useTranslations } from "next-intl";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const ApplyForm: React.FC<ApllyFormProps> = ({ onClose }) => {
  const t = useTranslations("FormContent");

  const {
    FirstNameRef,
    LastNameRef,
    PhoneNumRef,
    EmailRef,
    RadioCorporateRef,
    RadioPrivateRef,
    setSelectedValue,
    submited,
    onSubmit,
    warning,
    setEmailForm,
  } = useForm();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    setEmailForm(false);
  }, []);

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
            defaultValue={t("radioPrivate")}
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
          <Box className="btnBox" mt={"16px"}>
            <BtnComponent
              content={warning ? t("warning") : t("submit")}
              bgColor={warning ? "red" : "#3D6ECF"}
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
