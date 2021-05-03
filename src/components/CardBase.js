import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        lineHeight: 1.5,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function CardBase({ infoTxt }) {
    const classes = useStyles();

    const handleClick = (event) => {
        alert('Thank you! Currently working on back-end server for this function!');
    };

    return (
        <div className="main-card">
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {infoTxt.greeting}
                    </Typography>
                    <br />
                    <span fontSize="small">
                        {infoTxt.interestTech}
                        <br />
                        {infoTxt.interest}
                        <br />
                        <br />
                        {infoTxt.detail}
                    </span>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small" onClick={handleClick}>
                        CLICK
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default CardBase;
