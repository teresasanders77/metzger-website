import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
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

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { value, values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar position="static">
              <Toolbar variant="dense">
                QUESTIONNAIRE FOR YOUR COACHING STRATEGY SESSION
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
            <TextField
              placeholder="Enter your Date of Birth"
              label="Date of Birth"
              onChange={handleChange('dateOfBirth')}
              defaultValue={values.dateOfBirth}
              margin="normal"
              fullWidth
            />
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Marriage Status</FormLabel>
              <RadioGroup aria-label="marriageStatus" name="marriageStatus" style={{ display: 'initial' }}>
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
            <TextField
              placeholder="Description"
              label="Please briefly describe how you heard about my coaching services and why you would like a Strategy Session with me:"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth
            />
            <Button
              size="large"
              color="secondary"
              variant="contained"
              onClick={this.continue}
            >Continue</ Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}


export default FormUserDetails;