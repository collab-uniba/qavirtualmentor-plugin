import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {getSOUser} from './services.js';
import App from './Components/App';
import Popup from './Components/Popup/Popup';

import store from './store'


window.onload = function()
{
  //loads the popup page
  try{
      ReactDOM.render(<Popup/>, document.getElementById('root'))
  }catch(Error){}

  //searches for the reputation value of the user and saves it to the store (global var)
  var usr = document.getElementsByClassName("my-profile js-gps-track")[0]
  var usr_id = usr.href.replace("https://stackoverflow.com/users/", "").split("/")[0]
  getSOUser(usr_id).then(data => {
      store.set("user", data)
    
      //loads the content page part of the plugin
      const body = document.getElementsByTagName('body')[0];
      const qavmentor_app = document.createElement('div');
      qavmentor_app.id = 'qavmentor-root';
      body.appendChild(qavmentor_app);
      ReactDOM.render(<App/>, document.getElementById('qavmentor-root'));
  });

}
