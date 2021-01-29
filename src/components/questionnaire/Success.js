import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Box className={classes.root}>
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


export default withStyles(styles)(Success);