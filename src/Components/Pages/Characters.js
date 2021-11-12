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
         
      </Container>
    </div>
  );
};
export default Characters;
