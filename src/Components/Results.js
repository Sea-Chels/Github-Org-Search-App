
import React from 'react'
import Result from './Result'
const Results = ({results}) => {
  return (
    <>
       {results.map((result)=>(
    <Result key={result.id} repo={result.name} owner={result.owner.login} url={result.url}/> 
    ))}
    </>
  )
}

export default Results