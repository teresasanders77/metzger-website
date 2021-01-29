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

export class HighPerformance extends Component {
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
            <FormLabel component="legend">What negative recurring thoughts, fears, or behaviors would you like to overcome in order to feel more psychologically free,
              confident and successful?</FormLabel>
            <TextField
              onChange={handleChange('negative')}
              defaultValue={values.negative}
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
            <FormLabel component="legend">What eating, exercise or general health habits would you like to begin or break in order to feel stronger and more healthy
              physiologically?</FormLabel>
            <TextField
              onChange={handleChange('habits')}
              defaultValue={values.habits}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What distracts you the most from being more productive, and what major projects or missions are you struggling to complete
              faster or more efficiently?</FormLabel>
            <TextField
              onChange={handleChange('distractions')}
              defaultValue={values.distractions}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">If you were more persuasive or influential, what dream or desire would you ask others to support you in achieving?</FormLabel>
            <TextField
              onChange={handleChange('desire')}
              defaultValue={values.desire}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">When do you struggle to be fully present in your day or in any of your relationships?</FormLabel>
            <TextField
              onChange={handleChange('struggle')}
              defaultValue={values.struggle}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">How purposeful do you feel in living each day, and how would you describe your purpose?</FormLabel>
            <TextField
              onChange={handleChange('purposeful')}
              defaultValue={values.purposeful}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">Why would you like to work with a high performance coach?</FormLabel>
            <TextField
              onChange={handleChange('whyCareerCoach')}
              defaultValue={values.whyCareerCoach}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">Why do you feel you could be a great student or coaching client if we worked together?</FormLabel>
            <TextField
              onChange={handleChange('whyStudent')}
              defaultValue={values.whyStudent}
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


export default HighPerformance;