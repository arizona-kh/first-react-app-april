import React from 'react';
import {
  Avatar, 
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField, Checkboxes } from 'mui-rff';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from 'react-final-form';
import routes from '../routes';
import { auth } from '../configs/firebase.config';


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
  const classes = useStyles();
  
  //email & pass are taken from values.email
  const onSubmit = async({ email, password }) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(err => console.log(err));
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

  const formFields = [
    {
      size: 12,
      field: (
        // final form field takes filed name as the value.field-name, thus there is no need in specifying value={}; same with onChange
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
      />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      ),
    },
    {
      size: 12,
      field: (
        <Checkboxes
          name="remember"
          formControlProps={{ margin: 'none' }}
          data={{ label: 'Remember me', value: false }}
        />
      ),
    }
  ];

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
              render={({ handleSubmit, form, submitting, pristine, invalid }) => (
              <form 
              className={classes.form} 
              noValidate
              onSubmit={handleSubmit} // submits form
              >
              {formFields.map((item, idx) => (
                <Grid item xs={item.size} key={idx}>
                  {item.field}
                </Grid>
              ))}
              <Grid container spacing={1}>
              <Grid item xs={6}>
                <Link to={routes.home}>
                  <Button
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    >
                      Back Home
                  </Button>
                </Link>  
                </Grid>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={pristine || invalid}
                    //no need in additional submit call
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
                <Grid container>
                  <Grid item xs>
                    <Link to="" variant="body2">
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
              </form>
              )}
            />
          </div>
          <Box mt={8}>
          </Box>
        </Container>
      );
}