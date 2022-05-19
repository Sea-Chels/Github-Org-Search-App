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

//fetch API data and pass through searchForm to show the repos, then through the results.

function App() {

  const [results, setResults] = useState()

  const eventPrevent = (event) =>{
    event.preventDefault();
  }
  const onClick = (event, text) => {
    eventPrevent(event);
  }
  const checkData = ()=>console.log(results);

  let response = '';
  const onSearch = async (text)=> {
    const res = await fetch(`https://api.github.com/orgs/${text.text}/repos`);
    const data = await res.json()

    setResults(data);

    checkData()
  }

//need to pass info from clicking on repo list item to repo page, do I need the path? or can I just load it out??
//pass results through search form and make the list show up - right nor results is showing as undefined right after setting the results? hopefully not the case later. 


  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
          <Route path='/' element={<SearchForm onClick={onClick} onSearch={onSearch} results={results} response={response}/>}/> 
          <Route path={'/Repo'} element={<RepoPage />}/> 
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
