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
import { TextField } from 'final-form-material-ui';
import ReactPasswordStrength from 'react-password-strength';
import PasswordField from './Password.js'



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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
                  value={firstName}
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  placeholder="First Name"
                  autoFocus
                  onChange={e => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  value={lastName}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={e => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  value={email}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  placeholder="example@mail.com"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
{/*               <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <PasswordField 
                    value={password}
                    onStateChanged={setPassword} 
                    thresholdLength={7} 
                    minStrength={3} 
                    required
                  />
                </Grid>
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