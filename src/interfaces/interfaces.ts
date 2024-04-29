// Layout Interface

import { RefObject } from "react";

export interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

// Main Context Interface

export interface MainContextType {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

// Button Variants

type ButtonVariant = "text" | "outlined" | "contained";

export interface ButtonProps {
  variant: ButtonVariant;
  content: string;
  bgColor: string;
  color: string;
  onClick?: () => void;
}

// Language Button Props

export interface LanguageBtnProps {
  content: string;
  languageCode: string;
  bold?: string;
  isActive?: boolean;
}

// Modal Form interface

export interface ApplyModalProps {
  btnContent: string;
}

export interface ApllyFormProps {
  onClose: () => void;
}

// InputForm Props

export interface InputFormProps {
  firstName: RefObject<HTMLInputElement> | null;
  lastName: RefObject<HTMLInputElement> | null;
  phoneNumber: RefObject<HTMLInputElement> | null;
  email: RefObject<HTMLInputElement> | null;
}

// Marquee Companies Props

interface CompaniesData {
  id: number;
  img: string;
  alt: string;
}

export interface MarqueeCompaniesProps {
  data: CompaniesData[];
}

// Benefits Interface

export interface Benefits {
  title: string;
  paragraph: string;
  img: string;
}
