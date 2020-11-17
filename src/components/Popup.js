import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

export default function Popup(props) {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog
      open={openPopup}
      max-width="lg"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
