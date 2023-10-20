
import BackToHome from './BackToHome'

//have this only take in ID then fetch the info straight from id, then put into page here. 

const RepoPage = ({repoResult}) => {


  return (
    <div id='repo-page'>
        <BackToHome />
      <div id='repo-img-title'>
      <img src={`${repoResult?.owner?.avatar_url}`} alt={`${repoResult?.full_name} repository`}/>
        <h1><a href={repoResult?.html_url}>{repoResult?.full_name}</a></h1>
      </div>
      <div id='repo-info-section'>
        <div id='watchers' className='repo-card'>
          <h3>Watchers:</h3>
          <p>{repoResult?.watchers_count}</p>
        </div>
        <div id='forks' className='repo-card'>
          <h3>Forks:</h3>
          <p>{repoResult?.forks_count}</p>
        </div>
        <div id='issues' className='repo-card'>
          <h3>Open Issues:</h3>
          <p>{repoResult?.open_issues}</p></div>
        <div id='license' className='repo-card'>
          <h3>License:</h3>
          <p>{repoResult?.license?.name}</p>
        </div>
      </div>
    </div>
  )
}

export default RepoPage