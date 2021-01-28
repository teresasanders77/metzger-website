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
              placeholder="Clarity"
              label="Do you feel you are clear about who you are, your purpose, and the direction you want to
              go in life?"
              onChange={handleChange('clarity')}
              defaultValue={values.clarity}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Energy"
              label="Do you consistently have enough mental and physical energy needed to excel, accomplish
              your goals, and feel motivated and happy?"
              onChange={handleChange('energy')}
              defaultValue={values.energy}
              margin="normal"
              fullWidth

            />
            <br />
            <TextField
              placeholder="Courage"
              label="Do you take action and consistently express who you truly are and what you truly think,
              need, and desire with the world?"
              onChange={handleChange('courage')}
              defaultValue={values.courage}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Productivity"
              label="Are you consistently focused and effective, and are you good at minimizing distractions
              and maintaining priorities?"
              onChange={handleChange('productivity')}
              defaultValue={values.productivity}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Influence"
              label="Do you feel you have the social influence with your family, friends, and team needed to
              accomplish your goals?"
              onChange={handleChange('influence')}
              defaultValue={values.influence}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Occupation"
              label="What do you do for a living, and why did you choose that career?"
              onChange={handleChange('doForLiving')}
              defaultValue={values.doForLiving}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Goals"
              label="What are your top 3 goals you are striving to achieve right now?"
              onChange={handleChange('threeGoals')}
              defaultValue={values.threeGoals}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Stressors"
              label="What major stressors or challenges are you struggling with right now?"
              onChange={handleChange('stressors')}
              defaultValue={values.stressors}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Successful"
              label="When you feel like your most successful and happy self, what makes you feel that way?"
              onChange={handleChange('successful')}
              defaultValue={values.successful}
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


export default FormPersonalDetails;