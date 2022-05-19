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
  // useEffect((text)=>{
    
  // })

  // const fetchResults = async (text)=>{
  //   const res = await fetch(`https://api.github.com/orgs/${text}/repos`);
  //   const data = await res.json()
  //   console.log(data)
  // }

  const onSearch = async (text)=> {
    const res = await fetch(`https://api.github.com/orgs/${text.text}/repos`);
    const data = await res.json()
    console.log(data)
    
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
