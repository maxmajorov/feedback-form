import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type SnackbarPropsType = {
  status: null | string;
  setStatus: (status: null | string) => void;
};

export const SendMesSnackbar: React.FC<SnackbarPropsType> = ({
  status,
  setStatus,
}) => {
  const handleClose = (
    event?: Event | React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setStatus(null);
  };

  return (
    <Snackbar
      open={status !== null}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={status === "Email send successfully" ? "success" : "error"}
        color={status === "Email send successfully" ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {status}
      </Alert>
    </Snackbar>
  );
};
