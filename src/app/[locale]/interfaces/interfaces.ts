// Layout Interface

export interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
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
