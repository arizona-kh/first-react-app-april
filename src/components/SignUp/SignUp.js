import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { 
  makeStyles,
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Container,
  Typography
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { TextField, Input } from 'final-form-material-ui';
//import PasswordField from './Password.js';
//import ReactPasswordStrength from 'react-password-strength';
import { auth } from 'firebase';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp() {
  const classes = useStyles();

  const [value, setValues] = React.useState({ //value NOT values
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...value, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...value, showPassword: !value.showPassword });
  };

  const onSubmit = async({email, password, passwordConfirmation}) => {
    if (password === passwordConfirmation) {
      auth.createUserWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .catch(err => console.log(err));   
    } else {
      alert('Passwords do not match');
    }
  };

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length <= 3) {
      errors.firstName = 'First Name must be at least 3 charcters long';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length <= 3) {
      errors.lastName = 'Last Name must be at least 3 charcters long';
    }
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
          Sign up
        </Typography>
        <Form 
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, invalid, pristine, values }) => (
            <form 
            className={classes.form} 
            onSubmit={handleSubmit}
            >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  placeholder="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  placeholder="example@mail.com"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  value={value.password}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={value.showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange('password')}
                  InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {value.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />
            </Grid>
            <Grid item xs={12}>
                <Field
                  component={TextField}
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordConfirmation"
                  label="Confirm Password"
                  id="passwordConfirmation"
                  value={value.password}
                  type={value.showPassword ? 'text' : 'password'}
                  onChange={handleChange('password')}
                  InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {value.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />
            </Grid>
{/* password strength meter inside the Password field

                <Grid item xs={12}>
                <ReactPasswordStrength
                  component={TextField}
                  minLength={2}
                  minScore={2}
                  value={password}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  scoreWords={['weak', 'good', 'good', 'strong', 'strong']}
                  onChange={e => setPassword(e.target.value)}
                />
                </Grid> */} 

{/* password strength meter outside the Password field
              <Grid item xs={12}>
                  <PasswordField 
                    value={password}
                    onStateChanged={setPassword} 
                    thresholdLength={7} 
                    minStrength={3} 
                    required
                  />
                </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Grid 
              container 
              spacing={2}
              alignItems="center">
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="default"
                    className={classes.submit}
                    href="/"
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
                    disabled={invalid || pristine }
                  >
                    Sign Up
                  </Button>
                </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
          )}
        />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}