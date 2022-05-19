import React from 'react'
import BackToHome from './BackToHome'

//have this only take in ID then fetch the info straight from id, then put into page here. 

const RepoPage = () => {
  return (
    <div id='repo-page'>
      <div>
        <BackToHome />
      </div>
      <div>
        <img src='https://avatars.githubusercontent.com/u/69631?v=4'/>
        <h1>facebook/hhvm</h1>
      </div>
      <div id='repo-info-section'>
        <div id='watchers' className='repo-card'>
          <h3>Watchers:</h3>
          <p>17258</p>
        </div>
        <div id='forks' className='repo-card'>
          <h3>Forks:</h3>
          <p>2992</p>
        </div>
        <div id='issues' className='repo-card'>
          <h3>Open Issues:</h3>
          <p>659</p></div>
        <div id='license' className='repo-card'>
          <h3>License:</h3>
          <p>Other</p>
        </div>
      </div>
    </div>
  )
}
//name, avatar image, watchers, forks, open issues, license

export default RepoPage