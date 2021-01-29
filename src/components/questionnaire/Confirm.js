import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core/';

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

export class Confirm extends Component {
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
    const { values: {
      fullName,
      phoneNumber,
      address,
      cityStateZip,
      country,
      email,
      occupation,
      dateOfBirth,
      gender,
      marriageStatus,
      description,
      clarity,
      energy,
      courage,
      productivity,
      influence,
      doForLiving,
      threeGoals,
      stressors,
      successful,
      dreamLife,
      prevent,
      goalFail,
      threeChanges,
      proud,
      negative,
      habits,
      distractions,
      desire,
      struggle,
      purposeful,
      whyCareerCoach,
      whyStudent
    } } = this.props;
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
                  CONFIRM QUESTIONNAIRE DATA
                </Typography>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem>
                <ListItemText primary="Full Name"
                  secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number"
                  secondary={phoneNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address"
                  secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City, State, Zip"
                  secondary={cityStateZip} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Country"
                  secondary={country} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email"
                  secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation"
                  secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date of Birth"
                  secondary={dateOfBirth} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender"
                  secondary={gender} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Marriage Status"
                  secondary={marriageStatus} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Please briefly describe how you heard about my coaching services and why you would like a Strategy Session with me:"
                  secondary={description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you feel you are clear about who you are, your purpose, and the direction you want to
go in life?"
                  secondary={clarity} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you consistently have enough mental and physical energy needed to excel, accomplish
your goals, and feel motivated and happy?"
                  secondary={energy} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you take action and consistently express who you truly are and what you truly think,
need, and desire with the world?"
                  secondary={courage} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Are you consistently focused and effective, and are you good at minimizing distractions
and maintaining priorities?"
                  secondary={productivity} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you feel you have the social influence with your family, friends, and team needed to
accomplish your goals?"
                  secondary={influence} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What do you do for a living, and why did you choose that career?"
                  secondary={doForLiving} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What are your top 3 goals you are striving to achieve right now?"
                  secondary={threeGoals} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What major stressors or challenges are you struggling with right now?"
                  secondary={stressors} />
              </ListItem>
              <ListItem>
                <ListItemText primary="When you feel like your most successful and happy self, what makes you feel that way?"
                  secondary={successful} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What would your dream life look like if you could wave a wand and make it happen?"
                  secondary={dreamLife} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What else has prevented you from having that dream life?"
                  secondary={prevent} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What goal or dream have you ever given up on or failed at, and what do you believe caused you to stop or fail?"
                  secondary={goalFail} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What 3 big changes would you like to make in your life in the next 12 months?"
                  secondary={threeChanges} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What are you most proud of and excited about in your life?"
                  secondary={proud} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What negative recurring thoughts, fears, or behaviors would you like to overcome in order to feel more psychologically free,
confident and successful?"
                  secondary={negative} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What eating, exercise or general health habits would you like to begin or break in order to feel stronger and more healthy
physiologically?"
                  secondary={habits} />
              </ListItem>
              <ListItem>
                <ListItemText primary="What distracts you the most from being more productive, and what major projects or missions are you struggling to complete
faster or more efficiently?"
                  secondary={distractions} />
              </ListItem>
              <ListItem>
                <ListItemText primary="If you were more persuasive or influential, what dream or desire would you ask others to support you in achieving?"
                  secondary={desire} />
              </ListItem>
              <ListItem>
                <ListItemText primary="When do you struggle to be fully present in your day or in any of your relationships?"
                  secondary={struggle} />
              </ListItem>
              <ListItem>
                <ListItemText primary="How purposeful do you feel in living each day, and how would you describe your purpose?"
                  secondary={purposeful} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Why would you like to work with a high performance coach?"
                  secondary={whyCareerCoach} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Why do you feel you could be a great student or coaching client if we worked together?"
                  secondary={whyStudent} />
              </ListItem>
            </List>
            <br />
            <Box textAlign='center'>
              <Button
                size="large"
                color="main"
                variant="contained"
                onClick={this.back}
              >Back</Button>
             &nbsp;&nbsp;&nbsp;
             <Button
                size="large"
                color="main"
                variant="contained"
                onClick={this.continue}
              >Confirm & Continue </Button>
            </Box>
          </Box>
        </>
      </MuiThemeProvider>
    )
  }
}


export default Confirm;