import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(83, 108, 140)'
    }
  },
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
          <Box px={55} my={40}>
            <AppBar
              title="Success"
              position="static"
              style={{ background: 'rgb(83, 108, 140)' }}>
              <Toolbar variant="dense">
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <h1>Thanks for your Submission</h1>
                  <p>You will get email an with further instruction</p>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </>
      </MuiThemeProvider>
    )
  }
}


export default Success;