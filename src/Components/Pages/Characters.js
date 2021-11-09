import { Box, Typography, useMediaQuery, Button} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center",
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));
const api = "http://hp-api.herokuapp.com/api/characters";
const Characters = () => {
  const [data, setData] = useState(
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      console.log(data);
    })
  )
  
  const classes = useStyles();
  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">Characters</Typography>
      </Box>
      <Container component="section" maxWidth="lg" className={classes.root}>
          {data.map((character) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper className={classes.card}>
                <Box className={classes.icon}>
                  <img
                    src={character.image}
                    alt={character.name}
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box className={classes.title}>
                  <Typography variant="h5">{character.name}</Typography>
                </Box>
                <Box className={classes.featureList}>
                  <Typography variant="body1">Species: {character.species}</Typography>
                  <Typography variant="body1">
                    Origin: {character.origin.name}
                  </Typography>
                  <Typography variant="body1">
                    Status: {character.status}
                  </Typography>
                </Box>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </Paper>
            </Grid>
          ))}
      </Container>
    </div>
  );
};
export default Characters;
