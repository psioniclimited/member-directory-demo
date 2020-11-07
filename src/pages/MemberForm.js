import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, InputAdornment } from "@material-ui/core";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";
import * as memberService from "../services/memberService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
];

const initialValues = {
  id: 0,
  fullName: "",
  code: 0,
  mobile: "",
  gender: "male",
  memberType: "",
  nid: "",
  dob: new Date(),
  district: "",
  bloodGroup: "",
  isActive: true,
};

const useStyles = makeStyles((theme) => ({
  memberWrapper: {
    marginTop: "20px",
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "6px",
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
  textCenter: {
    textAlign: "center"
  }
}));

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
              <Controls.DatePicker
                name="dob"
                label="Date of Birth"
                value={values.dob}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="district"
                label="District"
                value={values.district}
                onChange={handleInputChange}
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
              <Controls.Input
                name="nid"
                label="NID Number"
                type="number"
                value={values.nid}
                onChange={handleInputChange}
              />
              <Controls.Select
                name="bloodGroup"
                label="Blood Group"
                value={values.bloodGroup}
                onChange={handleInputChange}
                options={memberService.getBloodGroup()}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.RadioGroup
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              />
              <Controls.Select
                name="memberType"
                label="Member Type"
                value={values.memberType}
                onChange={handleInputChange}
                options={memberService.getMemberType()}
              />
              <Controls.Checkbox
                name="isActive"
                label="Active Member"
                value={values.isActive}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} classes={{ root: classes.textCenter }}>
              <Controls.Button type="submit" text="Submit" />
              <Controls.Button type="submit" color="secondary" text="Reset" />
            </Grid>
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default MemberForm;
