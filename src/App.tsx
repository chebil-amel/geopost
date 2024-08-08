import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Center from './component/Center';
import DataExplorer from './component/DataExplorer';
import FullyCustomMap from './component/FullyCustomMap';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [selected, setSelected] = useState('Center');

  const handleSelect = (selection: string) => {
    setSelected(selection);
  };

  let component;
  switch (selected) {
    case 'Data Explorer':
      component = <DataExplorer />;
      break;
    case 'Map Explorer':
      component = <FullyCustomMap  />;
      break;
    case 'Download Center':
      component = <DataExplorer  />;
      break;
    case 'Knowledge Base':
      component = <DataExplorer  />;
      break;
    default:
      component = <Center />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar onSelect={handleSelect} />
      </Router>
      {component}
    </div>
  );
}

export default App;