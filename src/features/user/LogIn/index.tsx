import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useStyles } from './LogIn.styles';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../../../utils/formValidation';
import { AppDispatch, RootState } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimelinePost } from '../../feed/feedSlice';
import { login } from '../userSlice';

export const LogIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    (async function () {
      if (user.userLoggedIn) {
        try {
          await dispatch(fetchTimelinePost(user?.user[0]?._id));
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [user.userLoggedIn, dispatch, navigate]);

  // formik state
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        // TODO: try alternative for any
        const response: any = await dispatch(login(values));
        console.log(response);
        if (response.data.error) {
          navigate('/');
        } else {
          console.log('Wrong credentials');
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            /* eslint-disable */
            autoFocus
            /* eslint-disable */
          />
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
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Log In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography variant="body2">
                <RouterLink to="/signup">{"Don't have an account? Sign Up"}</RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
