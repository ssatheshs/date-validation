import { useState } from 'react';
import validator from 'validator';
import './App.css';

const App = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const validateDate = (value) => {
    
    if (validator.isDate(value)) {
      setErrorMessage('Valid Date :)')
    } else {
      setErrorMessage('Enter Valid Date!')
    }
  }


  return (
    <div className="App">
      <pre>
        <h2>Validating Date in ReactJS</h2>
        <span>Enter Date: </span><input type="text" 
        onChange={(e) => validateDate(e.target.value)}></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
      </pre>
    </div>
  );
}

export default App;
