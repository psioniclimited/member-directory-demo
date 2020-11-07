import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, InputAdornment, TextField } from "@material-ui/core";
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
  occupation: "",
  companyName: "",
  jobDesignation: "",
  territory: "",
  house: "",
  sector: "",
  flat: "",
  road: "",
  remark: "",
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
    textAlign: "center",
  },
}));

const MemberForm = () => {
  const classes = useStyles();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    // temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length == 11 ? "" : "Invalid Phone Number";
    if ("memberType" in fieldValues)
      temp.memberType =
        fieldValues.memberType.length != 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) memberService.insertMember(values);
  };

  return (
    <div className={classes.memberWrapper}>
      <Typography variant="h3" className={classes.memberTitle}>
        Member Form
      </Typography>
      <hr />
      <div className={classes.formWrapper}>
        <Form onSubmit={handleSubmit}>
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
                error={errors.fullName}
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
                error={errors.mobile}
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
                error={errors.memberType}
              />
              <Controls.Checkbox
                name="isActive"
                label="Active Member"
                value={values.isActive}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom className={classes.memberInfo}>
            Member Occupation
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Controls.Input
                name="occupation"
                label="Occupation"
                value={values.occupation}
                onChange={handleInputChange}
                error={errors.occupation}
              />
              <Controls.Input
                name="jobDesignation"
                label="Designation"
                value={values.jobDesignation}
                onChange={handleInputChange}
                error={errors.jobDesignation}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                name="companyName"
                label="Organization Name"
                value={values.companyName}
                onChange={handleInputChange}
                error={errors.companyName}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom className={classes.memberInfo}>
            Member Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Controls.Input
                name="territory"
                label="Area Name"
                value={values.territory}
                onChange={handleInputChange}
                error={errors.territory}
              />
              <Controls.Input
                name="house"
                label="House No."
                value={values.house}
                onChange={handleInputChange}
                error={errors.house}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Input
                name="sector"
                label="Sector/Moholla/Village"
                value={values.sector}
                onChange={handleInputChange}
                error={errors.sector}
              />
              <Controls.Input
                name="flat"
                label="Flat No."
                value={values.flat}
                onChange={handleInputChange}
                error={errors.flat}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Input
                name="road"
                label="Road/Residential area"
                value={values.road}
                onChange={handleInputChange}
                error={errors.road}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                name="remark"
                label="Remark"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={values.remark}
                onChange={handleInputChange}
                error={errors.remark}
              />
            </Grid>
          </Grid>
          <Grid xs={12} classes={{ root: classes.textCenter }}>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button color="default" text="Reset" onClick={resetForm} />
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default MemberForm;
