import React from 'react';
import { faCoffee as CoffeeIcon } from '@fortawesome/free-solid-svg-icons'
import './Resume.scss'
import FlexItem from './FlexItem';
import Timeline from './Timeline';
import List from './List';
import ProjectsComponent from './ProjectsComponent'
import { IconItem } from './IconItem';

const Name = ({ children }) => {
  return <section className="name">
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

const Resume = () => {
  return (
    <div className="Resume">
      <Name>Mohan Cao</Name>
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
              date: 'Present',
              description: [ 'Gonna be doing stuff. Not sure exactly what though..' ]
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
            <IconItem title="Coffee" icon={CoffeeIcon} />
            <IconItem title="Iced Coffee" icon={CoffeeIcon} />
            <IconItem title={<span>Tiramisu <small>(that has coffee in it)</small></span>} icon={CoffeeIcon} />
            <IconItem title="Espresso" icon={CoffeeIcon} />
            <IconItem title="Tea" icon={CoffeeIcon} />
            <IconItem title="I'm really rubbing it in that I can't be bothered looking for icons" icon={CoffeeIcon} />
          </FlexItem>
        </div>
      </DoubleColumn>
      <ProjectsComponent />
    </div>
  )
}

export default Resume;