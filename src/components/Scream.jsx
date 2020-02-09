import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
});

export default function Scream({ scream }) {
  const classes = useStyles();
  const {
    userImage,
    likeCount,
    body,
    commentCount,
    createdAt,
    userHandle,
    screamId
  } = scream;
  return (
    <Card className={classes.card}>
      <CardMedia
        image={userImage}
        title="Profile image"
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          color="primary"
          component={Link}
          to={`/users/${userHandle}`}
        >
          {userHandle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {createdAt}
        </Typography>
        <Typography variant="body1">{body}</Typography>
        <span>{likeCount} Likes</span>
        <span>{commentCount} comments</span>
      </CardContent>
    </Card>
  );
}
