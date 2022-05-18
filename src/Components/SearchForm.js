import React from 'react'
import ResultsSection from './ResultsSection'


const MainSearch = ({results}) => {

  const onClick = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div id="searchContainer">
        <form className="">
          <legend className="formLegend">Search</legend>
          <input className="orgInput" type="text" placeholder="Search Organizations"></input>
          <button onClick={onClick} id="search" type="submit">{`\u2315`}</button>
        </form>
        {results.length > 0 ? <ResultsSection results={results}/> : ''}
    </div>
  )
}

export default MainSearch
