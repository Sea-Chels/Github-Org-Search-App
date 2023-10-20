import React from 'react'

const ResultsSection = ({repo, results, setClicked, setRepoResult }) => {

  const repoClick = async (repoObject)=>{
    const res = await fetch(`https://api.github.com/repos/${repoObject}`);
    const data = await res.json();
    setRepoResult(data);
    setClicked(true);
  }
  return (    
    <div id="resultsContainer">
      {results?.message !== 'Not Found' ? <p id="showing-results">Showing results for {repo}...</p> : <p id="showing-results">No results, please try another account.</p> }
      <ul id="repoList"> 
      {results?.message !== 'Not Found' ? results.map((result)=>{
        return <div><li onClick = {() => repoClick(result?.full_name) } key={result?.id}>{result?.full_name}</li></div>
    }) : ''}
      </ul>
    </div>
  )
}

export default ResultsSection