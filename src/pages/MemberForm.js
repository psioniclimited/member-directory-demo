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
  const [memberType, setMemberTypes] = useState("building_owner");
  const [bloodGroup, setBloodGroups] = useState();
  const [value, setValue] = React.useState("public");

  const handleMemberChange = (event) => {
    setMemberTypes(event.target.value);
  };

  const handleBloodChange = (event) => {
    setBloodGroups(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.memberWrapper}>
      <Typography variant="h3" className={classes.memberTitle}>
        Member Form
      </Typography>
      <hr />
      <div className={classes.formWrapper}>
        <form>
          <Typography variant="h6" gutterBottom className={classes.memberInfo}>
            Member Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                name="memberName"
                type="text"
                label="Member Name"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="memberCode"
                type="number"
                label="Member Code"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">Photo</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="memberPhone"
                type="number"
                label="Phone Number"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+880</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="memberType"
                select
                label="Member Type"
                value={memberType}
                onChange={handleMemberChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                size="small"
              >
                {memberTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">Photo</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="districtName"
                type="text"
                label="District"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="bloodGroup"
                select
                label="Blood Group"
                value={bloodGroup}
                onChange={handleBloodChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                size="small"
                fullWidth
              >
                {bloodGroups.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={5} />
          </Grid>
          {/* Occupation Grid */}
          <Typography variant="h6" gutterBottom className={classes.memberInfo}>
            Member's Occupation
          </Typography>
          <hr />
          <Grid container>
            <Grid item xs={4}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                />
                <FormControlLabel
                  value="Private"
                  control={<Radio />}
                  label="Private"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
          {/* Address Grid */}
          <Typography variant="h6" gutterBottom className={classes.memberInfo}>
            Member's Address
          </Typography>
          <hr />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="territory"
                name="territory"
                label="Territory"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="sector"
                name="sector"
                label="Sector/Moholla/Village"
                fullWidth
              />
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="road"
                name="road"
                label="Road / Residential Area"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="house"
                name="house"
                label="House"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="flat"
                name="flat"
                label="Flat"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
