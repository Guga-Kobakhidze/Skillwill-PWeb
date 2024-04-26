"use client";

import React, { useEffect, useState } from "react";
import BtnComponent from "../buttons/BtnComponent";
import { Box } from "@mui/material";
import ApplyForm from "./ApplyForm";
import { OverLayStyle } from "./ModalsStyle";
import { ApplyModalProps } from "../../interfaces/interfaces";
import { useTranslations } from "next-intl";

const ApplyModal: React.FC<ApplyModalProps> = ({ btnContent }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const t = useTranslations("ApplyForm");

  const onToggle = () => {
    setShowModal((prev) => !prev);
    setShowOverlay((prev) => !prev);
  };

  return (
    <Box>
      {showModal && (
        <ApplyForm
          onClose={onToggle}
          title={t("title")}
          description={t("description")}
          radioPrivate={t("radioPrivate")}
          radioCorporate={t("radioCorporate")}
          firstName={t("firstName")}
          lastName={t("lastName")}
          phoneNumber={t("phoneNumber")}
          email={t("email")}
          submit={t("submit")}
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
