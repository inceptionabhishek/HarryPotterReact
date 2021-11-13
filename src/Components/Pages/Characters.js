import { Box, Typography, useMediaQuery, Button, Card, CardActionArea, CardMedia,CardContent,CardActions} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    maxWidth: 345,
    [theme.breakpoints.down("md")]: {
      maxWidth: 200,
    },
  },
  media: {
    height: 140,
  },
  image : {
    height: 200,
    width: 200,

  }
}));
const api = "http://hp-api.herokuapp.com/api/characters";
const Characters = () => {
  const [data, setData] = useState([]);
  useEffect (() => {  
    loadData();
  }, []);
    const loadData = async () => {
      const response = await fetch(api);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    };

  const classes = useStyles();
  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">Characters</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item) => (
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item>
                <img src={item.image} className={classes.image}></img>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
        
      </Grid>
    </div>
  );
};
export default Characters;
