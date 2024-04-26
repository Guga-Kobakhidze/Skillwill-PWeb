import Marquee from "@/components/marquee/Marquee";
import Potential from "@/components/potential/Potential";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Potential />
      <Marquee />
    </Box>
  );
}
