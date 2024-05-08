"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BtnComponent from "../buttons/BtnComponent";
import useForm from "@/hooks/useForm";
import InputForm from "../forms/InputForm";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useTranslations } from "next-intl";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactForm = () => {
  const t = useTranslations("FormContent");

  const {
    FirstNameRef,
    LastNameRef,
    PhoneNumRef,
    EmailRef,
    checked,
    setChecked,
    onSubmit,
    warning,
    setEmailForm,
    form,
  } = useForm();

  const handleCkeckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setEmailForm(true);
  }, []);

  return (
    <Box
      component={"form"}
      ref={form}
      onSubmit={onSubmit}
      mt={1}
      width={"100%"}
    >
      <InputForm
        email={EmailRef}
        firstName={FirstNameRef}
        lastName={LastNameRef}
        phoneNumber={PhoneNumRef}
      />
      <FormGroup sx={{ mb: "24px" }}>
        <FormControlLabel
          control={
            <Checkbox
              name="message"
              onChange={handleCkeckboxChange}
              checked={checked}
              className="myCheckbox"
            />
          }
          label={
            <span className="Terms">
              {t("contactCheck")}
              <Link href={"#"}>{t("contactCheckSpan")}</Link>
            </span>
          }
        />
      </FormGroup>
      <BtnComponent
        content={warning ? t("warning") : t("submit")}
        bgColor={warning ? "red" : "#3D6ECF"}
        variant="contained"
      />
    </Box>
  );
};

export default ContactForm;
