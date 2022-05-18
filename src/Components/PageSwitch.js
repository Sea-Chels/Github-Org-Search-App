import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SearchForm from './SearchForm'
import RepoPage from './RepoPage'


const Main = ({results, onClick}) => {

  return ( 
    <BrowserRouter>
          <Routes>
          <Route path='/' element={<SearchForm onClick={onClick} results={results}/>}/> 
          <Route path={'/Repo'} element={<RepoPage />}/> 
          </Routes>
    </BrowserRouter>
  
  )
}

export default Main