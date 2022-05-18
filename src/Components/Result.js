import React from 'react'
import RepoPage from './RepoPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Result = ({key, repo, owner, url}) => {
  return (
      <>
      <li key={key}>{repo} By {owner}<Link to={<RepoPage url={url}/>}>Users</Link> </li>
      </>
  )
}

export default Result