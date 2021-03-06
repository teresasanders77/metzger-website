import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormPersonalDetails2 from './FormPersonalDetails2';
import HighPerformance from './HighPerformance';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    fullName: '',
    phoneNumber: '',
    address: '',
    cityStateZip: '',
    country: '',
    email: '',
    occupation: '',
    dateOfBirth: '',
    gender: '',
    marriageStatus: '',
    description: '',
    clarity: '',
    energy: '',
    courage: '',
    productivity: '',
    influence: '',
    doForLiving: '',
    threeGoals: '',
    stressors: '',
    successful: '',
    dreamLife: '',
    prevent: '',
    goalFail: '',
    threeChanges: '',
    proud: '',
    negative: '',
    habits: '',
    distractions: '',
    desire: '',
    struggle: '',
    purposeful: '',
    whyCareerCoach: '',
    whyStudent: '',
  }

  // Proceed to next step 
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change 
  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state;
    const {
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
    } = this.state;
    const values = {
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
    }

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormPersonalDetails2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <HighPerformance
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values} />
        )
      case 6:
        return <Success />
      default:
        (console.log('This is multi step form with react'))
    }
  }
}

export default UserForm
