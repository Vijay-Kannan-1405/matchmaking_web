import { Avatar, Box, Button, Checkbox, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import LoginContainer from "./component/component";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const paperStyle = {padding:20, height : "70vh", width: 400, margin:'40px auto'}
  return (
    <Grid2>
      <Paper elevation={10} style={paperStyle}>
      <Grid container direction="column" alignItems="center">
      <Avatar />
      <h2>Log in</h2>  
      <TextField id="Email" placeholder="Enter Email" label="Email" type={"email"} variant="standard" required/>
      <TextField id="password" placeholder="Enter password" label="Password"
          type="password"
          autoComplete="current-password" variant="standard" required/>
          <FormControlLabel control={<Checkbox name="check" />} label="Remember Me" />
          <Button type = "submit" variant="contained" color="primary">Log in </Button>
          <Typography>
            <Link href="H">Forget Password ?</Link>
          </Typography>
          <Typography>Do you have an account? <Link href="H">Sign Up</Link></Typography>
    </Grid>
       
      </Paper>
    </Grid2>
  );
};

export default Login;
