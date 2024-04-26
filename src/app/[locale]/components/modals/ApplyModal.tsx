"use client";

import React, { useEffect, useState } from "react";
import BtnComponent from "../buttons/BtnComponent";
import { Box } from "@mui/material";
import ApplyForm from "./ApplyForm";
import { OverLayStyle } from "./ModalsStyle";
import { ApplyModalProps } from "../../interfaces/interfaces";

const ApplyModal: React.FC<ApplyModalProps> = ({
  btnContent,
  description,
  email,
  firstName,
  lastName,
  phoneNumber,
  radioCorporate,
  radioPrivate,
  submit,
  title,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const onToggle = () => {
    setShowModal((prev) => !prev);
    setShowOverlay((prev) => !prev);
  };

  return (
    <Box>
      {showModal && (
        <ApplyForm
          onClose={onToggle}
          description={description}
          email={email}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          radioCorporate={radioCorporate}
          radioPrivate={radioPrivate}
          submit={submit}
          title={title}
        />
      )}
      {showOverlay && <Box sx={{ ...OverLayStyle }} onClick={onToggle}></Box>}
      <BtnComponent
        content={btnContent}
        variant="contained"
        bgColor="#3D6ECF"
        color="#fff"
        onClick={onToggle}
      />
    </Box>
  );
};

export default ApplyModal;
