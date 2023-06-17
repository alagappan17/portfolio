import { useState } from 'react';
import React  from 'react';
import './App.css';
import Header from './Header';
import NavButtons from './NavButtons';
import { ProfileContext } from './ProfileContext';
import DevContent from './DevContent';

function App() {
  const [activeProfile, setActiveProfile] = useState("Developer");
  return (
    <div className="App">
      <ProfileContext.Provider value={{activeProfile, setActiveProfile}}>
        <Header />
        <DevContent />
        <NavButtons />
      </ProfileContext.Provider>
    </div>
  );
}

export default App;