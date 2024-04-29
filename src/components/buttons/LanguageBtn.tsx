"use client";

import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { LanguageBtnProps } from "../../interfaces/interfaces";
import useLocalStorage from "@/hooks/useLocaleStorage";

const LanguageBtn: React.FC<LanguageBtnProps> = ({
  content,
  languageCode,
  bold,
}) => {
  const router = useRouter();

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
