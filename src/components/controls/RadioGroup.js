import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  radioStyle: {
    flexDirection: "row",
  },
}));

export default function RadioGroup(props) {
  const classes = useStyles();
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl fullWidth size="small" variant="outlined">
      <MuiRadioGroup
        name={name}
        value={value}
        onChange={onChange}
        className={classes.radioStyle}
        
      >
        {items.map((item) => (
          <FormControlLabel
            value={item.id}
            key={item.id}
            control={<Radio size="small" />}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
