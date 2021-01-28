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

export class FormPersonalDetails2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
              placeholder="Dream Life"
              label="What would your dream life look like if you could wave a wand and make it happen?"
              onChange={handleChange('dreamLife')}
              defaultValue={values.dreamLife}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Prevent"
              label="What else has prevented you from having that dream life?"
              onChange={handleChange('prevent')}
              defaultValue={values.prevent}
              margin="normal"
              fullWidth

            />
            <br />
            <TextField
              placeholder="Fail"
              label="What goal or dream have you ever given up on or failed at, and what do you believe caused you to stop or fail?"
              onChange={handleChange('goalFail')}
              defaultValue={values.goalFail}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Changes"
              label="What 3 big changes would you like to make in your life in the next 12 months?"
              onChange={handleChange('threeChanges')}
              defaultValue={values.threeChanges}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Excited"
              label="What are you most proud of and excited about in your life?"
              onChange={handleChange('proud')}
              defaultValue={values.proud}
              margin="normal"
              fullWidth
            />
            <Button
              size="large"
              color="secondary"
              variant="contained"
              onClick={this.continue}
            >Continue</ Button>
            <Button
              size="large"
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</ Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}


export default FormPersonalDetails2;