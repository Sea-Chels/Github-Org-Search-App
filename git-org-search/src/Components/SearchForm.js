import React from 'react'
import ResultsSection from './ResultsSection'


const SearchForm = ({results}) => {

  // const onClick = (e) => {
  //   e.preventDefault()
  //   console.log(e)
  // }

  return (
    <div id="searchContainer">
        <form className="">
          <legend className="formLegend">Search</legend>
          <input className="orgInput" type="text" placeholder="Search Organizations"></input>
          <button onClick={console.log('click')} id="search" type="submit">{`\u2315`}</button>
        </form>
        {/* {results.length > 0 ? <ResultsSection/> : ''} */}
    </div>
  )
}

export default SearchForm
