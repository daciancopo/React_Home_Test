import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [accountType, setAccountType] = useState('Manual');

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {};

    for (let [name, value] of formData) {
      payload[name] = value;
    }

    console.log(JSON.stringify(payload));

    // Show alert with payload
    alert(JSON.stringify(payload));
  };

  return (
    <div className='card'>
      <form className='d-flex flex-column justify-content-start align-items-start' onSubmit={handleSubmit}>
        <label className='mb-2'>
            Account Type:
          <select className='rounded' value={accountType} onChange={handleAccountTypeChange}>
            <option value="Manual">Manual</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <br />

        <label className='mb-2'>
          Username:
          <input className='rounded' type="text" name="username" required placeholder='name@example.com'/>
        </label>
        <br />

        <label className='mb-2'>
          Password:
          <input className='rounded' type="password" name="password" required placeholder="Required" />
        </label>
        <br />

        <label className='mb-2'>
          Server Address:
          <input className='rounded' type="text" name="serverAddress" placeholder="example.com" />
        </label>
        <br />

        {accountType === 'Advanced' && (
          <div className='d-flex flex-column justify-content-start align-items-start'>

            <label className='mb-2'>
              Server Path:
              <input className='rounded' type="text" name="serverPath" pattern="[a-zA-Z0-9/]*" placeholder="/calendars/user/" />
            </label>
            <br />

            <label className='mb-2'>
              Port:
              <input className='rounded' type="number" name="port" min="1" max="65535" />
            </label>
            <br />

            <label className='mb-2'>
              Use SSL
              <input className='rounded' type="checkbox" name="ssl" />
            </label>
            <br />
          </div>
        )}

        <button className='rounded' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
