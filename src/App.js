import { useState } from 'react';
import React  from 'react';
import './App.css';
import Header from './Header';
import NavButtons from './NavButtons';
import { ProfileContext } from './ProfileContext';
import DevContent from './DevContent';
import ArtContent from './ArtContent';
import DevIconPack from './DevIconPack';
// import AnimatedComponentWrapper from './AnimatedComponentWrapper';

function App() {
  const [activeProfile, setActiveProfile] = useState("Developer");
  return (
    <div className="App">
      <ProfileContext.Provider value={{activeProfile, setActiveProfile}}>
        <Header />
        {activeProfile === "Developer" ? <DevContent/> : <ArtContent />}
        <NavButtons />
        <DevIconPack/>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;