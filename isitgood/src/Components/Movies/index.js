import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Movies(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card>
            <CardActionArea onClick={handleExpandClick}>
                <CardMedia
                    title={props.movie.title}
                    src={props.poster}
                    component="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.movie.title}
                    </Typography>

                </CardContent>
                <CardActions>
                </CardActions>
            </CardActionArea>
            <CardActions disableSpacing>
                <Link href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
                    <Button size="small" color="primary">
                        Visit page
                </Button>
                </Link>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6">Overview</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.movie.overview}
                    </Typography>
                    <Typography variant="h6">Rating</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.movie.vote_average}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
