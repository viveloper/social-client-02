import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
// MUI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// components
import Scream from '../components/Scream';
import Profile from '../components/Profile';

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();
  const [screams, setScreams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchScreams();
  }, []);

  const fetchScreams = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        'https://us-central1-viveloper-social.cloudfunctions.net/api/screams'
      );
      setScreams(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const screamsMarkup = !loading ? (
    screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
  ) : (
    <p>loading...</p>
  );

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          {screamsMarkup}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
      </Grid>
    </Container>
  );
}
