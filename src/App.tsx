import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'; 
import DropdownMenu from './components/menu/DropDownMenu'; 

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <DropdownMenu />
      <div style={{ paddingTop: '100px' }}>
      </div>
    </div>
  );
};

export default App;
