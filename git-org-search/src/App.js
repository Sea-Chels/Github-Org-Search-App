import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchForm from './Components/SearchForm'
import RepoPage from './Components/RepoPage'

//fetch API data and pass through searchForm to show the repos, then through the results.

function App() {

  const eventPrevent = (event) =>{
    event.preventDefault();
  }
  const onClick = (event, text) => {
    eventPrevent(event);
  }
  const onSearch =(text)=> {
    console.log(text);
  }

  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
          <Route path='/' element={<SearchForm onClick={onClick} onSearch={onSearch}/>}/> 
          <Route path={'/Repo'} element={<RepoPage />}/> 
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
