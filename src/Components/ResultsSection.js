import React from 'react'
import Result from './Result'

const ResultsSection = ({repo, results, repoClick}) => {


  return (    
    <div id="resultsContainer">
      <p id="showing-results">Showing results for {repo}...</p>
      <ul id="repoList"> 
      {results.map((result)=>{
        return <Result key={result.id} repo={result.full_name} repoClick={repoClick}/>;
    })}

      </ul>
    </div>

  )
}
//key={result.id} repo={result.full_repo}

//<li><a onClick={onClick} setId={setId(e.target.id)}href=`/Repo`>repo repo</a></li>
//set id will take the id of the clicked on repo and pass it through a set Id function that will put it through the original switch routes path, so that when the page loads it will have gone through the object keys and loaded the information. 

//  key={result.id} repo={result.repo} owner={result.owner.login} url={result.url} 
export default ResultsSection