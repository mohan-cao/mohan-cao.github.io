import React from 'react';
import { faGithub as GithubIcon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default class ProjectsComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: null
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/mohan-cao/repos')
    .then(x => x.json())
    .then(x => this.setState({
      projects: x.filter(only => !only.fork).sort((a, b) => b["stargazers_count"] - a["stargazers_count"])
    }))
  }
  render() {
    let { projects } = this.state
    if (!projects) projects = []
    return (
      <section>
        <h2>GitHub Projects</h2>
        { projects.map((proj) => 
          <div key={proj.id} className="even-columns">
            <div className="even-columns-child" style={{ overflow: 'hidden', position: 'relative', textAlign: 'center' }}>
              {(proj.homepage) ? <img alt="Repository homepage background screenshot" className="bg-image" src={`//image.thum.io/get/${proj.homepage}`} /> : ''}
              <div className="translucent-bg">
                <h3 style={{ textTransform: 'none' }}>{proj.name.replace(/-/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase())}</h3>
                <p><em>{(proj.description) ? proj.description[0].toUpperCase()+proj.description.slice(1) : 'No description available. Most likely a university project or something random.'}</em></p>
                <p>{proj.stargazers_count} <FontAwesomeIcon icon={faStar} /> {proj.forks} <FontAwesomeIcon icon={faCodeBranch} /> <a style={{ marginLeft: 20 }} href={proj["html_url"]}><FontAwesomeIcon icon={GithubIcon} /> GitHub</a></p>
                {(proj.homepage) ? <p style={{ borderTop: '0.5px solid #fff', marginTop: 15 }}><a href={proj.homepage}>Visit the homepage</a></p> : ''}
              </div>
            </div>
          </div>
        )}
        
      </section>
    )
  }
}