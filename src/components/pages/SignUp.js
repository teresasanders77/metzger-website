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
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xaylalyb"
        method="POST"
      >
        <div class="signUp">
          <div class="rowHeader">
            <h1>Contact Me</h1>
          </div>
          <div class="row input-container">
            <div class="col-xs-12">
              <div class="styled-input wide">
                <input type="text" name="name" />
                <label>Name</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12" style={{ marginRight: "60px" }}>
              <div class="styled-input" >
                <input type="text" name="email" />
                <label>Email</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12" style={{ float: "right" }}>
              <div class="styled-input" >
                <input type="text" name="phone" />
                <label>Phone Number</label>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <textarea name="message" ></textarea>
                <label>Message</label>
              </div>
            </div>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button class="btn-lrg submit-btn">Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>
        </div>
      </form>

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