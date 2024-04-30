"use client";

import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { LanguageBtnProps } from "../../interfaces/interfaces";
import {useLocale} from 'next-intl';

const LanguageBtn: React.FC<LanguageBtnProps> = ({
  content,
  languageCode,
  bold,
}) => {
  const router = useRouter();

  const locale = useLocale();

  console.log(locale)


  const handleLanguageChange = () => {
    router.push(`/${languageCode}`);
  };

  return (
    <Button
      variant="text"
      sx={{ color: "black", fontFamily: "RocRegular", fontWeight: bold }}
      onClick={handleLanguageChange}
    >
      {content}
    </Button>
  );
};

export default LanguageBtn;
