import React from 'react';
import './App.css'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  return (
      <div className='home'>
        <Header />
        <Search />
      </div>
  );
}

export default App;