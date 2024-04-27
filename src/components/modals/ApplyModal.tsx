"use client";

import React, { useEffect, useState } from "react";
import BtnComponent from "../buttons/BtnComponent";
import { Box } from "@mui/material";
import ApplyForm from "./ApplyForm";
import { OverLayStyle } from "./ModalsStyle";
import { ApplyModalProps } from "../../interfaces/interfaces";

const ApplyModal: React.FC<ApplyModalProps> = ({ btnContent }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const onToggle = () => {
    setShowModal((prev) => !prev);
    setShowOverlay((prev) => !prev);
  };

  return (
    <Box>
      {showModal && <ApplyForm onClose={onToggle} />}
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
