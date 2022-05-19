import React from 'react'

const Result = ({id, repo}) => {
    
  return (
    <>
    <li key={id}>{repo}</li>
    </>
  )
}
//key={key} ><a href={`/Repo`}>{name}</a
//can't get it to map, but it has no error message. Results has value. 

export default Result