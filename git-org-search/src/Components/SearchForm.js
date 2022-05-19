import React from 'react'
import ResultsSection from './ResultsSection'
import {useState} from 'react'
import Header from './Header'

const SearchForm = ({results, onClick, onSearch}) => {

  const [text, setText ] = useState('')
  const onSubmit = (e)=>{
    e.preventDefault()
    if(text === '' || undefined || null){
      alert('Please add search criteria!')
      return
    }
    onSearch({text})
    setText('')
  }
  return (
    <>
    <Header />
    <div id="searchContainer">
        <form className="Search-Form" onSubmit={onSubmit}>
          <legend className="formLegend">Search</legend>
          <input className="orgInput" type="text" placeholder="Search Organizations" value={text} onChange={(e)=> setText(e.target.value)}></input>
          <input id="search" type="submit" value={`\u2315`}></input>
        </form>
        {/* {results.length > 0 ? <ResultsSection/> : ''} */}
    </div>
    </>
  )
}

export default SearchForm
