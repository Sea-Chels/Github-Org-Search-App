
import BackToHome from './BackToHome'

//have this only take in ID then fetch the info straight from id, then put into page here. 

const RepoPage = ({repoResult}) => {

  //this returns undefined, even though the data has been set, I think the page loads before the data does, which is why it breaks, trying to figure out a way around that. 
  console.log(repoResult)

  //test data
  repoResult = {
    "id": 455600,
    "node_id": "MDEwOlJlcG9zaXRvcnk0NTU2MDA=",
    "name": "hhvm",
    "full_name": "facebook/hhvm",
    "private": false,
    "owner": {
      "login": "facebook",
      "id": 69631,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      "avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook",
      "html_url": "https://github.com/facebook",
      "followers_url": "https://api.github.com/users/facebook/followers",
      "following_url": "https://api.github.com/users/facebook/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook/orgs",
      "repos_url": "https://api.github.com/users/facebook/repos",
      "events_url": "https://api.github.com/users/facebook/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/facebook/hhvm",
    "description": "A virtual machine for executing programs written in Hack.",
    "fork": false,
    "url": "https://api.github.com/repos/facebook/hhvm",
    "forks_url": "https://api.github.com/repos/facebook/hhvm/forks",
    "keys_url": "https://api.github.com/repos/facebook/hhvm/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/facebook/hhvm/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/facebook/hhvm/teams",
    "hooks_url": "https://api.github.com/repos/facebook/hhvm/hooks",
    "issue_events_url": "https://api.github.com/repos/facebook/hhvm/issues/events{/number}",
    "events_url": "https://api.github.com/repos/facebook/hhvm/events",
    "assignees_url": "https://api.github.com/repos/facebook/hhvm/assignees{/user}",
    "branches_url": "https://api.github.com/repos/facebook/hhvm/branches{/branch}",
    "tags_url": "https://api.github.com/repos/facebook/hhvm/tags",
    "blobs_url": "https://api.github.com/repos/facebook/hhvm/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/facebook/hhvm/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/facebook/hhvm/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/facebook/hhvm/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/facebook/hhvm/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/facebook/hhvm/languages",
    "stargazers_url": "https://api.github.com/repos/facebook/hhvm/stargazers",
    "contributors_url": "https://api.github.com/repos/facebook/hhvm/contributors",
    "subscribers_url": "https://api.github.com/repos/facebook/hhvm/subscribers",
    "subscription_url": "https://api.github.com/repos/facebook/hhvm/subscription",
    "commits_url": "https://api.github.com/repos/facebook/hhvm/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/facebook/hhvm/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/facebook/hhvm/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/facebook/hhvm/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/facebook/hhvm/contents/{+path}",
    "compare_url": "https://api.github.com/repos/facebook/hhvm/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/facebook/hhvm/merges",
    "archive_url": "https://api.github.com/repos/facebook/hhvm/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/facebook/hhvm/downloads",
    "issues_url": "https://api.github.com/repos/facebook/hhvm/issues{/number}",
    "pulls_url": "https://api.github.com/repos/facebook/hhvm/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/facebook/hhvm/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/facebook/hhvm/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/facebook/hhvm/labels{/name}",
    "releases_url": "https://api.github.com/repos/facebook/hhvm/releases{/id}",
    "deployments_url": "https://api.github.com/repos/facebook/hhvm/deployments",
    "created_at": "2010-01-02T01:17:06Z",
    "updated_at": "2022-05-19T19:18:54Z",
    "pushed_at": "2022-05-19T23:47:39Z",
    "git_url": "git://github.com/facebook/hhvm.git",
    "ssh_url": "git@github.com:facebook/hhvm.git",
    "clone_url": "https://github.com/facebook/hhvm.git",
    "svn_url": "https://github.com/facebook/hhvm",
    "homepage": "https://hhvm.com",
    "size": 514915,
    "stargazers_count": 17260,
    "watchers_count": 17260,
    "language": "C++",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": false,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 2993,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 659,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "allow_forking": true,
    "is_template": false,
    "topics": [
      "hack",
      "hacklang",
      "hhvm",
      "php"
    ],
    "visibility": "public",
    "forks": 2993,
    "open_issues": 659,
    "watchers": 17260,
    "default_branch": "master",
    "temp_clone_token": null,
    "organization": {
      "login": "facebook",
      "id": 69631,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      "avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/facebook",
      "html_url": "https://github.com/facebook",
      "followers_url": "https://api.github.com/users/facebook/followers",
      "following_url": "https://api.github.com/users/facebook/following{/other_user}",
      "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
      "organizations_url": "https://api.github.com/users/facebook/orgs",
      "repos_url": "https://api.github.com/users/facebook/repos",
      "events_url": "https://api.github.com/users/facebook/events{/privacy}",
      "received_events_url": "https://api.github.com/users/facebook/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 2993,
    "subscribers_count": 1022
  }
  

  return (
    <div id='repo-page'>
        <BackToHome />
      <div id='repo-img-title'>
      <img src={`${repoResult.owner.avatar_url}`} alt={`${repoResult.full_name} repository`}/>
        <h1><a href={repoResult.html_url}>{repoResult.full_name}</a></h1>
      </div>
      <div id='repo-info-section'>
        <div id='watchers' className='repo-card'>
          <h3>Watchers:</h3>
          <p>{repoResult.watchers_count}</p>
        </div>
        <div id='forks' className='repo-card'>
          <h3>Forks:</h3>
          <p>{repoResult.forks_count}</p>
        </div>
        <div id='issues' className='repo-card'>
          <h3>Open Issues:</h3>
          <p>{repoResult.open_issues}</p></div>
        <div id='license' className='repo-card'>
          <h3>License:</h3>
          <p>{repoResult.license.name}</p>
        </div>
      </div>
    </div>
  )
}
// {repoResult.license.name} - this breaks that last div for some reason, I guess because it's got more than one scope level on the object. 

//MVP: 
//name, avatar image, watchers, forks, open issues, license

export default RepoPage