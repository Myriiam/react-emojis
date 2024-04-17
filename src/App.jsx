import React, { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import List from './components/List.jsx'


function App() {
const [search, setSearch] = useState('');

  return (
    <>
      <h1>Emoji Search</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <List search={search} setSearch={setSearch} />
    </>
  )
}

export default App
