import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
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
  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name"
                  secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name"
                  secondary={lastName} />
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
                <ListItemText primary="City"
                  secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio"
                  secondary={bio} />
              </ListItem>
            </List>
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}


export default Confirm;