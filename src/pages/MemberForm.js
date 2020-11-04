import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField, Typography } from "@material-ui/core";

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
  memberStyle: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px"
  }
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

  const handleMemberChange = (event) => {
    setMemberTypes(event.target.value);
  };

  const handleBloodChange = (event) => {
    setBloodGroups(event.target.value);
  };

  return (
    <div className={classes.memberWrapper}>
      <form>
        <Typography variant="h4" className={classes.memberStyle}>This is a member form</Typography>
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
        <Grid container></Grid>
      </form>
    </div>
  );
};

export default MemberForm;
