import React from 'react';
import Header from './components/common/Header';
import Section01 from './components/sections/Section01';
import Section02 from './components/sections/Section02';
import Section03 from './components/sections/Section03';
import Section04 from './components/sections/Section04';
import Section05 from './components/sections/Section05';
import Section06 from './components/sections/Section06';

function App() {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Header />
      <main>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
      </main>
    </div>
  );
}

export default App;
