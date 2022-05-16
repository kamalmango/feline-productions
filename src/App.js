import { useState } from 'react';
import felineLogo from './feline-logo.svg';
import './App.css';

function App() {
  const [password, setPassword] = useState(true)

  return (
    <div className="app-container">
      <img src={felineLogo} className="logo" alt="logo" />
      <div className='password-container'>
        <div>
        <input type='password' onClick={() => setPassword(true)} className='password' placeholder='Password' />
        {!password && <p className='error-message'>The password you've entered is incorrect. Please try again</p>}
        </div>
        <button onClick={() => setPassword(false)} className="button">ENTER</button>
      </div>
    </div>
  );
}

export default App;
