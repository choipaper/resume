import React from 'react';
import { makeStyles, Link, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(3),
            padding: theme.spacing(2),
        },
        borderStyle: 'solid',
        position: 'sticky',
        paddingLeft: '10px',
    },
}));

function Navigation() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    const handleClcik = (event) => {
        event.target.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };
    return (
        <div className="nav">
            <Typography className={classes.root}>
                <Link
                    href="#bio"
                    onClick={preventDefault}
                    color="inherit"
                    variant="h5"
                >
                    Bio
                </Link>
                <Link href="#" onClick={handleClcik} color="inherit" variant="h5">
                    Project
                </Link>
                <Link
                    href=".footer"
                    onClick={preventDefault}
                    color="inherit"
                    variant="h5"
                >
                    Support
                </Link>
            </Typography>
        </div>
    );
}

export default Navigation;
