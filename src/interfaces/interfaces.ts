// Layout Interface

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
  isActive?: boolean;
}

// Modal Form interface

export interface ApplyModalProps {
  btnContent: string;
}

export interface ApllyFormProps {
  onClose: () => void;
  description: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  radioCorporate: string;
  radioPrivate: string;
  submit: string;
  title: string;
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
  title: string
  paragraph: string
  img: string
}
