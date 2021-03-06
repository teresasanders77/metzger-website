import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import CoachingProgram from './components/pages/CoachingProgram';
import Testimonials from './components/pages/Testimonials';
import SignUp from './components/pages/SignUp';
import UserForm from './components/questionnaire/UserForm';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="app">
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/coachingProgram' component={CoachingProgram} />
            <Route path='/testimonials' component={Testimonials} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/questionnaire' component={UserForm} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
