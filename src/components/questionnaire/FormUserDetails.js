import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    const { values, handleChange } = this.props;
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
            <TextField
              placeholder="Enter your Gender"
              label="Gender"
              onChange={handleChange('gender')}
              defaultValue={values.gender}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter your Marriage Status"
              label="Marriage Status"
              onChange={handleChange('marriageStatus')}
              defaultValue={values.marriageStatus}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
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