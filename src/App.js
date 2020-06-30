import React, { useState, Fragment } from 'react';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import MemoryGame from './MemoryGame/MemoryGame';

const App = () => {

  const [ authenticated, set_authenticated ] = useState(false);
  let application;

  if (authenticated) {
    application = <MemoryGame />
  } else {
    application = <SignUp />
  }

    return (
      <Fragment>
        {application}  
      </Fragment>
    );
}

export default App;