import React, { useState } from 'react';
import './SignUp.css';
import { db } from '../../firebase.js';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('emails').add({
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
      .then(() => {
        alert('Message has been submitted');
        setLoader(false);
      })
      .catch(error => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="signUp">
      <h2>Contact Me</h2>

      <form method="POST" className="form" onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone</label>
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button type="submit" style={{ background: loader ? '#ccc' : 'rgb(2, 2, 110)' }}
        >
          Submit
          </button>
      </form>
    </div>
  )
}

export default SignUp;
