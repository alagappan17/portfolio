import { useState } from 'react';
import React  from 'react';
import './App.css';
import Header from './Header';
import NavButtons from './NavButtons';
import { ProfileContext } from './ProfileContext';
import DevContent from './DevContent';
import ArtContent from './ArtContent';

function App() {
  const [activeProfile, setActiveProfile] = useState("Developer");
  return (
    <div className="App">
      <ProfileContext.Provider value={{activeProfile, setActiveProfile}}>
        <Header />
        {activeProfile === "Developer" ? <DevContent/> : <ArtContent />}
        {/* <DevContent /> */}
        <NavButtons />
      </ProfileContext.Provider>
    </div>
  );
}

export default App;