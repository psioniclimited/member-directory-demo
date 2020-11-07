import React from 'react'
import MemberForm from "./MemberForm";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import PageHeader from '../components/PageHeader';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Members() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New Member"
                subTitle=""
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <MemberForm />
            </Paper>
        </>
    )
}