import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import Potential from "./components/potential/Potential";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <Box className="container">
      <Potential />
    </Box>
  );
}
