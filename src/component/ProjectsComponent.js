import React from 'react';
import { faGithub as GithubIcon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import ImageLoader from './ImageLoader';
import './ProjectsComponent.scss';

const DEFAULT_PROJ_DESC = 'No description available. Most likely a university project or something random.';

function GitHubProjectsComponent(proj) {
  return (
    <div className="ProjectsComponent even-columns" key={proj.id}>
      <div className="even-columns-child" style={{ overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
        <ImageLoader
          alt={"background screenshot for project " + proj.name}
          className="bg"
          src={(proj.homepage)?`https://image.thum.io/get/${proj.homepage}`:''}
          unselectable="on" style={{ MozUserSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none' }}
        />
        <div className="translucent-bg">
          <h3 style={{ textTransform: 'none' }}>{proj.name.replace(/-/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase())}</h3>
          <p><em>{(proj.description && proj.description.length) ? proj.description[0].toUpperCase()+proj.description.slice(1) : DEFAULT_PROJ_DESC}</em></p>
          <p unselectable="on" style={{ MozUserSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none' }}>
            {proj.stargazers_count}<FontAwesomeIcon icon={faStar} style={{ marginRight: '0.4em', marginLeft: '0.2em' }} />
            {proj.forks}<FontAwesomeIcon icon={faCodeBranch} style={{ marginLeft: '0.2em' }} />
            <a style={{ marginLeft: 20 }} href={proj.html_url}><FontAwesomeIcon icon={GithubIcon} /> GitHub</a>
          </p>
          {
            (proj.homepage) ?
            <p style={{ borderTop: '0.5px solid #fff', marginTop: 15 }}>
              <a unselectable="on" style={{ MozUserSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none' }} href={proj.homepage}>Visit the homepage</a>
              <span className="invisible">Link: {proj.homepage}</span>
            </p> : ''
          }
        </div>
      </div>
    </div>
  );
}

export default class ProjectsComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: null
    }
  }
  async componentDidMount() {
    let reposList = await (await fetch('https://api.github.com/users/mohan-cao/repos?type=all')).json()
    const orgForUser = await (await fetch('https://api.github.com/users/mohan-cao/orgs')).json()
    for (let i=0; i<orgForUser.length; i++) {
      reposList.push(...await (await fetch(orgForUser[i]['repos_url'])).json())
    }
    this.setState({
      projects: reposList.filter(only => !only.fork).sort((a, b) => b["stargazers_count"] - a["stargazers_count"])
    })
  }
  render() {
    let { projects } = this.state
    if (!projects) projects = []
    return (
      <section>
        <h2>GitHub Projects</h2>
        { projects.map((proj) => 
          GitHubProjectsComponent(proj)
        )}
        
      </section>
    )
  }
}