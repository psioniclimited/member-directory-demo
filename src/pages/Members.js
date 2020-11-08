import React, { useState } from "react";
import MemberForm from "./MemberForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import useTable from "../components/useTable";
import * as memberService from "../services/memberService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "fullName", label: "Member Name" },
  { id: "memberType", label: "Member Type" },
  { id: "mobile", label: "Mobile" },
];

export default function Members() {
  const classes = useStyles();
  const [records, setRecords] = useState(memberService.getAllMembers());

  const {
    TblContainer,
    TblHeader,
    TblPagination,
    recordsAfterPaginatingAndSorting,
  } = useTable(records, headCells);

  return (
    <>
      <PageHeader
        title="New Member"
        subTitle=""
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        {/* <MemberForm /> */}
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
