import React from "react";
import './SignUp.scss'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class="signUp">
        <div class="row">
          <h1>Contact Me</h1>
        </div>
        <div class="row">
          <h4>I'd love to hear from you!</h4>
        </div>
        <div class="row input-container">
          <div class="col-xs-12">
            <div class="styled-input wide">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input">
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div class="col-xs-12">
            {status === "SUCCESS" ? <p>Thanks!</p> : <div class="btn-lrg submit-btn"><button>Submit</button></div>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}