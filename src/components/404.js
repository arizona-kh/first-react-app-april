import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
      textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100vh",
        margin: "auto",
      },
      h1 : {
        fontSize: "11rem",
        fontWeight: "900",
        color: "#262626",
        textTransform: "uppercase",
        margin: "3rem",
      },
      h2 : {
        fontSize: "1rem",
        color: "#262626",
        textTransform: "uppercase",
        margin: "3rem",
      }
      
      
}))

export default function Notfound () {
    const classes = useStyles();

    return (
    <div className={classes.textContainer}>
        <h3>Oops! Page not found</h3>
        <h1 className={classes.h1}><span>4</span><span>0</span><span>4</span></h1>
        <h2 className={classes.h2}>we are sorry, but the page you requested was not found</h2>
        <Button variant="contained" color="secondary" href="/">Return Home</Button>
    </div>
    
    
    )
}
