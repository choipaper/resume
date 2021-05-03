import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '47% 53%',
        lineHeight: 1.5,
    },
    pos: {
        marginBottom: 12,
    },
}));

function ProjectCard({ object }) {
    const classes = useStyles();

    return (
        <div className="main-card">
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {object.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {object.tool}
                    </Typography>
                    <span>
                        {object.detail[0]}
                        <br />
                        {object.detail[1]}
                        <br />
                        {object.detail[2]}
                    </span>
                </CardContent>
                <CardContent>
                    <div className="yt-container">{object.embed}</div>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProjectCard;
