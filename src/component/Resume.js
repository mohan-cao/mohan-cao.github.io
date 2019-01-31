import React from 'react';
import { faCoffee as CoffeeIcon, faCameraRetro, faGamepad } from '@fortawesome/free-solid-svg-icons'
import './Resume.scss'
import FlexItem from '../util/FlexItem';
import Timeline from '../util/Timeline';
import List from '../util/List';
import ProjectsComponent from './ProjectsComponent'
import { IconItem } from '../util/IconItem';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import ViolinIcon from './ViolinIcon';

const Name = ({ style, children }) => {
  return <section style={style} className="name">
    <h1>{children}</h1>
  </section>
}

const DoubleColumn = ({ children }) => {
  return <div className="two-columns">
    {(children && children.length > 1) ? children.slice(0,2).map((x,i) => <div key={i} className="column">{x}</div>) : ''}
  </div>
}

const Tagline = ({ children }) => {
  return (
    <section>
      <h2>Summary</h2>
      {children}
    </section>
  )
}

const BasicInfo = () => {
  return (
    <div className="Resume">
      <Name style={{ minWidth: '300px' }}>Mohan Cao</Name>
      <DoubleColumn>
        <div>
          <Tagline>
            <p>
              Hi there! A warm welcome to my profile page. I don't update these taglines much because it's a waste of time for me, a waste of time for you reading this, and a general waste of space as well. 
              To demonstrate that what I said was correct, I just wasted precious seconds of your life while you were reading this large blob of information that wasn't really information at all.
            </p>
            <p>Before I made this, I hoped for this website to be something much more... flashy, but I'll make do with what I have.</p>
          </Tagline>
          <Timeline title='Work Experience' list={[
            {
              title: 'Graduate Software Engineer',
              subtitle: 'Serato',
              date: '2019-',
              description: [ 'Currently developing software for Serato! This might not be the latest info, check out my LinkedIn for updates' ]
            }, {
              title: 'Software Engineering Intern',
              subtitle: 'EROAD NZ',
              date: 'Dec 2017 - March 2018',
              description: [ 'Maintained automated backend maintenance tools', 'Backend development with Java + Spring MVC + React' ]
            }
          ]} />
          <Timeline title='Education' list={[
            {
              title: 'Bachelor of Engineering',
              date: 'May 2019',
              subtitle: 'University of Auckland',
              description: [
                'Specialising in Software Engineering',
                'Graduating with First Class Honours'
              ]
            }
          ]} />
        </div>
        <div>
          <Timeline title="Contact me" list={[
            {
              description: <p>64 22 071 3765</p>
            }, {
              description: <p>mohancao@yahoo.com.au</p>
            }, {
              description: <p>Auckland</p>
            }
          ]} condensed />
          <List title="Key Skills" items={[
            'OOP',
            'Full-stack development',
            'Human-computer interaction',
            'Computer and network security',
            'Performant computing'
          ]} />
          <FlexItem title="Interests">
            <IconItem title="Music" icon={faItunesNote} />
            <IconItem title="Violin" icon={<ViolinIcon />} custom />
            <IconItem title="Photoshop" icon={faCameraRetro} />
            <IconItem title="Gaming" icon={faGamepad} />
            <IconItem title="Good food" icon={CoffeeIcon} />
          </FlexItem>
        </div>
      </DoubleColumn>
      <ProjectsComponent />
    </div>
  )
}

const Resume = ({ json }) => {
  if (!json) return BasicInfo();
  return (
    <div className="Resume">
      <Name style={{ minWidth: '300px' }}>Mohan Cao</Name>
      <DoubleColumn>
        <div>
          <Tagline>
            { json.tagline.map((x,i) => <p key={i}>{x}</p>) }
          </Tagline>
          <Timeline title='Work Experience' list={json.work_experience} />
          <Timeline title='Education' list={json.education} />
        </div>
        <div>
          <Timeline title="Contact me" list={json.contact.map(x => { return { description: <p>{x.description}</p>}; })} condensed />
          <List title="Key Skills" items={json.skills} />
          <FlexItem title="Interests">
            <IconItem title="Music" icon={faItunesNote} />
            <IconItem title="Violin" icon={<ViolinIcon />} custom />
            <IconItem title="Photoshop" icon={faCameraRetro} />
            <IconItem title="Gaming" icon={faGamepad} />
            <IconItem title="Good food" icon={CoffeeIcon} />
          </FlexItem>
        </div>
      </DoubleColumn>
      <ProjectsComponent />
    </div>
  )
}

export default Resume;