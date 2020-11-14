import React, { useState } from "react";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment
} from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import useTable from "../components/useTable";
import * as memberService from "../services/memberService";
import Controls from "../components/controls/Controls";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "fullName", label: "Member Name" },
  { id: "memberType", label: "Member Type" },
  { id: "mobile", label: "Mobile", disableSorting: true },
];

export default function Members() {
  const classes = useStyles();
  const [records, setRecords] = useState(memberService.getAllMembers());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const {
    TblContainer,
    TblHeader,
    TblPagination,
    recordsAfterPaginatingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.values == "") return items;
        else return items.filter((x) => x.fullName.includes(target.value));
      },
    });
  };
  
  return (
    <>
      <PageHeader
        title="New Member"
        subTitle=""
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        {/* <MemberForm /> */}
        <Toolbar>
          <Controls.Input
            label="Search Member"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHeader />
          <TableBody>
            {recordsAfterPaginatingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.memberType}</TableCell>
                <TableCell>{item.mobile}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
}
