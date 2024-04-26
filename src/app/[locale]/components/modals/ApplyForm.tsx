import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { ApplyFormBox } from "./ModalsStyle";

interface ApllyFormProps {
  onClick: () => void;
}

const ApplyForm: React.FC<ApllyFormProps> = ({ onClick }) => {
  return (
    <Box>
      <Box sx={{ ...ApplyFormBox }}>
        <Box onClick={onClick} sx={{ cursor: "pointer" }}>
          <Image
            width={40}
            height={40}
            src={"/assets/closeBtn.svg"}
            alt="closeBtn"
          />
        </Box>
        <Typography>ApplyForm</Typography>
      </Box>
    </Box>
  );
};

export default ApplyForm;
