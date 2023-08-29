import React from "react";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

const Alertify = ({ message, severity }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000} // 2 saniye sonra kapanır
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} // Sağ üst köşe
    >
      <Alert severity={severity} variant="filled" onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Alertify;
