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

export class FormPersonalDetails extends Component {
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
            <br /><br />
            <TextField
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you feel you are clear about who you are, your purpose, and the direction you want to
              go in life?"
              onChange={handleChange('clarity')}
              defaultValue={values.clarity}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              fullWidth
            />
            <br />
            <TextField
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you consistently have enough mental and physical energy needed to excel, accomplish
              your goals, and feel motivated and happy?"
              onChange={handleChange('energy')}
              defaultValue={values.energy}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}

            />
            <br />
            <TextField
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you take action and consistently express who you truly are and what you truly think,
              need, and desire with the world?"
              onChange={handleChange('courage')}
              defaultValue={values.courage}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
            <br />
            <TextField
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Are you consistently focused and effective, and are you good at minimizing distractions
              and maintaining priorities?"
              onChange={handleChange('productivity')}
              defaultValue={values.productivity}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
            <br />
            <TextField
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you feel you have the social influence with your family, friends, and team needed to
              accomplish your goals?"
              onChange={handleChange('influence')}
              defaultValue={values.influence}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
            <br /><br /><br />
            <FormLabel component="legend">What do you do for a living, and why did you choose that career?</FormLabel>
            <TextField
              onChange={handleChange('doForLiving')}
              defaultValue={values.doForLiving}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What are your top 3 goals you are striving to achieve right now?</FormLabel>
            <TextField
              onChange={handleChange('threeGoals')}
              defaultValue={values.threeGoals}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What major stressors or challenges are you struggling with right now?</FormLabel>
            <TextField
              onChange={handleChange('stressors')}
              defaultValue={values.stressors}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">When you feel like your most successful and happy self, what makes you feel that way?</FormLabel>
            <TextField
              onChange={handleChange('successful')}
              defaultValue={values.successful}
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


export default FormPersonalDetails;