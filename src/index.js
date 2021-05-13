import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './assets/img/logo.svg'
import About from './components/About'
import Contact from './components/Contact'

import './App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  

import App from './App';

<form name="contact" netlify netlify-honeypot="bot-field" hidden>
<input type="text" name="name" />
<input type="email" name="email" />
<textarea name="message"></textarea>
</form>

ReactDOM.render(
  <React.StrictMode>
          <Router>
        <header>
            <hr/>
            <img className="logo" src={Logo}></img>
           <ul className="navbar-links">
                <li>
                  <Link to ='/'>Ballina</Link>
               </li>
                <li>
                  <Link to='/about'>Rethe nesh</Link>  
                </li>
                <li>
                <Link to='/contact'>Kontakto</Link>  
                </li>
            </ul>
            </header>
            
            <Switch>
            <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
              </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

