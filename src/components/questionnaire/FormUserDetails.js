import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(83, 108, 140)'
    },
    status: {
      danger: orange[500],
    },
  }
});

const styles = {
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingRight: '5%',
      paddingLeft: '5%',
      paddingBottom: '5%'
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '20%',
      paddingLeft: '20%',
      paddingBottom: '5%'
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: '25%',
      paddingLeft: '25%',
      paddingBottom: '5%'
    },
  },
}

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { value, values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Box className={classes.root}>
            <AppBar
              position="static"
              style={{ background: 'rgb(83, 108, 140)' }}
            >
              <Toolbar variant="dense">
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  QUESTIONNAIRE FOR YOUR COACHING STRATEGY SESSION
                </Typography>
              </Toolbar>
            </AppBar>
            <TextField
              placeholder="Enter your Full Name"
              label="Full Name"
              onChange={handleChange('fullName')}
              defaultValue={values.fullName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter your Phone Number"
              label="Phone Number"
              onChange={handleChange('phoneNumber')}
              defaultValue={values.phoneNumber}
              margin="normal"
              fullWidth

            />
            <br />
            <TextField
              placeholder="Enter your Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="City, State, Zip"
              label="City, State, Zip"
              onChange={handleChange('cityStateZip')}
              defaultValue={values.cityStateZip}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter your Country"
              label="Country"
              onChange={handleChange('country')}
              defaultValue={values.country}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <FormLabel component="legend">Date of Birth</FormLabel>
            <TextField
              type="date"
              onChange={handleChange('dateOfBirth')}
              defaultValue={values.dateOfBirth}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange('gender')} style={{ display: 'initial' }}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female" />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male" />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other" />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Marriage Status</FormLabel>
              <RadioGroup aria-label="marriageStatus" value={value} onChange={handleChange('marriageStatus')} name="marriageStatus" style={{ display: 'initial' }}>
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                />
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="divorced"
                  control={<Radio />}
                  label="Divorced"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormLabel component="legend">Please briefly describe how you heard about my coaching services and why you would like a Strategy Session with me:</FormLabel>
            <TextField
              placeholder="Description"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <Box textAlign='center'>
              <Button
                size="large"
                color="main"
                variant="contained"
                onClick={this.continue}
              >Continue</ Button>
            </Box>
          </Box>
        </>
      </MuiThemeProvider>
    )
  }
}


export default withStyles(styles)(FormUserDetails);