import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@material-ui/core/';

class Like {
    static #count = 0;

    static increment() {
        this.#count += 1;
    }

    static getCount() {
        return this.#count;
    }
}

class VisitStat extends React.Component {
    constructor(props) {
        super(props);
        //const bull = <span className={classes.bullet}></span>;
        this.updateLike = this.updateLike.bind();
        //let count = Like.getCount();
        this.state = {
            count: Like.getCount(),
        };
    }

    updateLike = () => {
        Like.increment();
        this.setState({ count: Like.getCount() });
        /*let data = {};
        loadData(data);
        //updateData();*/
    };

    useStyles = makeStyles({
        root: {
            minWidth: 150,
            color: 'white',
            background: '#716C6B',
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

    render() {
        return (
            <div className="main-card">
                <Card className={this.useStyles.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {'Stats'}
                        </Typography>
                        <Typography
                            className={this.useStyles.pos}
                            color="textSecondary"
                        >
                            With Love:
                            {this.state.count}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {'Goal:'}
                            <br />
                            {'Current:'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={() => {
                                this.updateLike();
                            }}
                            color="primary"
                        >
                            HIT
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default VisitStat;
