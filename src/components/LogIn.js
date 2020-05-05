import React, { useState } from 'react';
import {
  Avatar, 
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  // Link,
  Grid,
  Box,
  Typography,
  Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField } from 'final-form-material-ui'; // note, if using material ui textfield, value won't be read
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import routes from '../routes';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));  

export default function LogIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();
  
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  };
  
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if(!values.email.match( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      errors.email = "Please enter a valid e-mail adress"
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, invalid, pristine, values }) => (
              <form 
              className={classes.form} 
              noValidate
              onSubmit={handleSubmit}
              >
                <Field
                  component={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  value={email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={e => setEmail(e.target.value)}
                />
                <Field
                  component={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Button
                      component={Link}
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      to={routes.home}
                      >
                        Back Home
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={pristine || invalid}
                    >
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link 
                      to={routes.signup} 
                      variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
              )}
            />
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
}