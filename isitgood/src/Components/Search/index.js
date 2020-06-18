import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 10,
        marginTop: 10,
        fontWeight: 500
    },
    input: {
        fontSize: 24,
        color: 'black'
    },
}));

export default function Search(props) {
    const { searchHandler } = props;
    const classes = useStyles();
    return (
        <div>
            <TextField
                id="search"
                label="Search for a movie..."
                className={classes.root}
                onChange={(event) => {
                    // set the state of parent component here...
                    searchHandler(event.target.value);
                }}
            />
        </div>
    );
}

