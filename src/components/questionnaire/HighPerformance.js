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

export class HighPerformance extends Component {
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
              placeholder="Negative"
              label="What negative recurring thoughts, fears, or behaviors would you like to overcome in order to feel more psychologically free,
              confident and successful?"
              onChange={handleChange('negative')}
              defaultValue={values.negative}
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
              placeholder="Habits"
              label="What eating, exercise or general health habits would you like to begin or break in order to feel stronger and more healthy
              physiologically?"
              onChange={handleChange('habits')}
              defaultValue={values.habits}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Distractions"
              label="What distracts you the most from being more productive, and what major projects or missions are you struggling to complete
              faster or more efficiently?"
              onChange={handleChange('distractions')}
              defaultValue={values.distractions}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Desire"
              label="If you were more persuasive or influential, what dream or desire would you ask others to support you in achieving?"
              onChange={handleChange('desire')}
              defaultValue={values.desire}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Struggle"
              label="When do you struggle to be fully present in your day or in any of your relationships?"
              onChange={handleChange('struggle')}
              defaultValue={values.struggle}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Purposeful"
              label="How purposeful do you feel in living each day, and how would you describe your purpose?"
              onChange={handleChange('purposeful')}
              defaultValue={values.purposeful}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Why"
              label="Why would you like to work with a high performance coach?"
              onChange={handleChange('whyCareerCoach')}
              defaultValue={values.whyCareerCoach}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Why You"
              label="Why do you feel you could be a great student or coaching client if we worked together?"
              onChange={handleChange('whyStudent')}
              defaultValue={values.whyStudent}
              margin="normal"
              fullWidth
            />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</ Button>
            <Button
              color="primary"
              variant="contained"
              onClick={this.back}
            >Back</ Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}


export default HighPerformance;