import './App.css';
import PageSwitch from './Components/PageSwitch' 
import Header from './Components/Header'
import Footer from './Components/Footer'
import { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';ResultsSection'

function App() {

  const [results, setResults] = useState([])

  // const onClick = (event)=>{
  //   event.preventDefault()
  // }

  return (
    <div className="App">
    <Header />
    <PageSwitch results={results} />
    <Footer />
    </div>
  );
}

export default App;


//Acceptance Criteria: 
// - A page where there is an input field and user can type in organizations and show list of public repositories
// - Ex: a user types in facebook and results show public repository like react, react-native, jest

// - When a repository is clicked, it should go to another page and show details like:
// - name
// - avatar image
// - watchers
// - forks
// - open issues
// - license