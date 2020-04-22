import React from 'react';
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
import { TextField} from 'final-form-material-ui';



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

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  };

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length <= 5) {
      errors.firstName = 'First Name must be at least 6 charcters long';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length <= 5) {
      errors.lastName = 'Last Name must be at least 6 charcters long';
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
          render={({ handleSubmit, submitting, pristine, values }) => (
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
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
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
            disabled={submitting || pristine}
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