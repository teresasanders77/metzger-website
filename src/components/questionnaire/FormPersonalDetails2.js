import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
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

export class FormPersonalDetails2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Box px={55} my={3}>
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
            <br /><br /><br />
            <FormLabel component="legend">What would your dream life look like if you could wave a wand and make it happen?</FormLabel>
            <TextField
              onChange={handleChange('dreamLife')}
              defaultValue={values.dreamLife}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What else has prevented you from having that dream life?</FormLabel>
            <TextField
              onChange={handleChange('prevent')}
              defaultValue={values.prevent}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What goal or dream have you ever given up on or failed at, and what do you believe caused you to stop or fail?</FormLabel>
            <TextField
              onChange={handleChange('goalFail')}
              defaultValue={values.goalFail}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What 3 big changes would you like to make in your life in the next 12 months?</FormLabel>
            <TextField
              onChange={handleChange('threeChanges')}
              defaultValue={values.threeChanges}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What are you most proud of and excited about in your life?</FormLabel>
            <TextField
              onChange={handleChange('proud')}
              defaultValue={values.proud}
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
                onClick={this.back}
              >Back</ Button>
              &nbsp;&nbsp;&nbsp;
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


export default FormPersonalDetails2;