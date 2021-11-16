import React from 'react';
import './App.css';
import WeatherFetch from './Components/WeatherFetch';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <WeatherFetch />
    </div>
  );
}

export default App;