import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

export class Success extends Component {
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();

    this.props.prevStep();
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thanks for your Submission</h1>
            <p>You will get email with further instruction</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}


export default Success;