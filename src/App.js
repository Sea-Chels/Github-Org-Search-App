import './App.css';
import Footer from './Components/Footer'
import { useState } from 'react'
import SearchForm from './Components/SearchForm'
import RepoPage from './Components/RepoPage'

function App() {

  const [results, setResults] = useState()
  const [repoResult, setRepoResult] = useState()
  const [clicked, setClicked] = useState(false);

  const onClick = (event) => {
    event.preventDefault();
  }

  //fetch the searched term --
  const onSearch = async (text)=> {
    const res = await fetch(`https://api.github.com/orgs/${text.text}/repos`);
    const data = await res.json();
    setResults(data);
  }

  //fetch the repo info that was clicked on, get it to get the info before page load--

  return (
    <div className="App">
        { !clicked && <SearchForm onClick={onClick} setRepoResult={setRepoResult} setClicked={setClicked} onSearch={onSearch} results={results}/>}
         {clicked && <RepoPage repoResult={repoResult}/>}
      <Footer />
    </div>

  );
}

export default App;
