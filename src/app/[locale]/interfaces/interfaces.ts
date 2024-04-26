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
}
