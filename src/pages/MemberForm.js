import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { useForm, Form } from "../components/useForm";
import Controls from '../components/controls/Controls';

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'}
]

const initialValues = {
  id: 0,
  fullName: "",
  code: 0,
  mobile: "",
  gender: "male",
  memberType: "tenant",
  nidNumber: "",
  district: "",
  bloodGroup: "a_pos",
  occupation: "",
  address: "",
};

const useStyles = makeStyles((theme) => ({
  memberWrapper: {
    marginTop: "20px",
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "6px",
  },
  bloodStyle: {
    width: "auto",
  },
  memberTitle: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  formWrapper: {
    marginTop: "15px",
  },
  memberInfo: {
    marginBottom: "15px",
    marginTop: "15px",
  },
}));

const memberTypes = [
  {
    value: "building_owner",
    label: "Building Owner",
  },
  {
    value: "flat_owner",
    label: "Flat Owner",
  },
  {
    value: "organization",
    label: "Organization",
  },
  {
    value: "tenant",
    label: "Tenant",
  },
];

const bloodGroups = [
  {
    value: "a_pos",
    label: "A+",
  },
  {
    value: "o_pos",
    label: "O +",
  },
  {
    value: "b_pos",
    label: "B+",
  },
  {
    value: "ab_pos",
    label: "AB+",
  },
  {
    value: "a_neg",
    label: "A-",
  },
  {
    value: "o_neg",
    label: "O-",
  },
  {
    value: "b_neg",
    label: "B-",
  },
  {
    value: "ab_neg",
    label: "AB-",
  },
];

const MemberForm = () => {
  const classes = useStyles();
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <div className={classes.memberWrapper}>
      <Typography variant="h3" className={classes.memberTitle}>
        Member Form
      </Typography>
      <hr />
      <div className={classes.formWrapper}>
        <Form>
          <Typography variant="h6" gutterBottom className={classes.memberInfo}>
            Member Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Controls.Input
                name="fullName"
                label="Member Name"
                value={values.fullName}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="mobile"
                type="number"
                label="Mobile"
                value={values.mobile}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+88</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Input
                name="code"
                label="Code"
                value={values.code}
                onChange={handleInputChange}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default MemberForm;
