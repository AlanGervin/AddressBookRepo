import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NameForm from './NameForm';
import SearchField from './SearchField';
import reportWebVitals from './reportWebVitals';

const contactArray = [];



ReactDOM.render(
  <React.StrictMode>

    <NameForm array={contactArray}/>
    <SearchField array={contactArray} />
    <div id="contactContainer"></div>
  </React.StrictMode>,
  document.getElementById('root')
);


console.log(contactArray);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
