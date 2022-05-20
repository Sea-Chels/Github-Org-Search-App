import React from 'react'

const Result = ({id, repo, repoClick}) => {

  return (
    <>
    <a href='/Repo'><li onClick = {()=> repoClick({repo}) } key={id}>{repo}</li></a>
    </>
  )
}

export default Result