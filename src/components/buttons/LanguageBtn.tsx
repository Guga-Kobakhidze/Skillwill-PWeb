"use client";

import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { LanguageBtnProps } from "../../interfaces/interfaces";

const LanguageBtn: React.FC<LanguageBtnProps> = ({ content, languageCode }) => {
  const router = useRouter();

  const handleLanguageChange = () => {
    router.push(`/${languageCode}`);
  };

  return (
    <Button
      variant="text"
      sx={{ color: "black", fontFamily: "RocRegular" }}
      onClick={handleLanguageChange}
    >
      {content}
    </Button>
  );
};

export default LanguageBtn;
