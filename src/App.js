import './App.css';
import Footer from './Components/Footer'
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchForm from './Components/SearchForm'
import RepoPage from './Components/RepoPage'

function App() {

  const [results, setResults] = useState()
  const [repoResult, setRepoResult] = useState()

  const onClick = (event) => {
    event.preventDefault();
  }

  //fetch the searched term --
  const onSearch = async (text)=> {
    const res = await fetch(`https://api.github.com/orgs/${text.text}/repos`);
    const data = await res.json()

    setResults(data);
  }

  //fetch the repo info that was clicked on, get it to get the info before page load--
  // let improvResult; 
  const repoClick = async (repoObject)=>{
    console.log(repoObject)
    const res = await fetch(`https://api.github.com/repos/${repoObject.repo}`);

    // improvResult = data
    setRepoResult(await res.json);
    // return data

  }
  //async() => await repoResult
  // https://api.github.com/repos/

//try wrapping the repo rooute in a  if statement and set it to ONLY if improvResult has a value or repoResult has a value, or make a separate function to use the async await repoResult above and then call the function in the curly braces below. 
  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
          <Route path='/' element={<SearchForm onClick={onClick} onSearch={onSearch} results={results} repoClick={repoClick}/>}/> 
          <Route path={'/Repo'} element={<RepoPage repoResult={repoResult}/>}/>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
