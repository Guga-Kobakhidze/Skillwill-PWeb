import { SxProps } from "@mui/material";

const Absolute: SxProps = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 20,
  backgroundColor: "blue",
};

export const OverLayStyle: SxProps = {
  ...Absolute,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 19,
  width: "200%",
  height: "200%",
};

export const ApplyFormBox: SxProps = {
  ...Absolute,
  width: "200px",
  height: "200px",
  color: "red",
};
