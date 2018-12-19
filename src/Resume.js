import React from 'react';
import { faCoffee as CoffeeIcon, faCameraRetro, faGamepad } from '@fortawesome/free-solid-svg-icons'
import './Resume.scss'
import FlexItem from './FlexItem';
import Timeline from './Timeline';
import List from './List';
import ProjectsComponent from './ProjectsComponent'
import { IconItem } from './IconItem';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';

const ViolinIcon = ({ style }) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 512 512" style={{ width: '3em', ...style, enableBackground: "new 0 0 512 512" }}>
      <g>
        <g>
          <path d="M317.123,371.819c-10.584-2.313-18.268-11.871-18.268-22.728c0-8.336,4.514-16.087,11.778-20.231l8.809-5.021v-52.175
            c0-40.568-32.885-73.591-73.399-73.834V81.455h11.636V0h-58.182v81.455h11.636V197.83c-40.513,0.243-73.399,33.266-73.399,73.834
            v52.175l8.809,5.021c7.266,4.144,11.778,11.895,11.778,20.231c0,10.857-7.683,20.415-18.269,22.727l-13.731,2.998v53.752
            c0,46.004,37.428,83.433,83.433,83.433h37.666c46.004,0,83.433-37.428,83.433-83.433v-53.751L317.123,371.819z M166.405,450.327
            h8.254c16.543,0,30.473,11.394,34.362,26.745C190.398,476.793,174.292,465.976,166.405,450.327z M295.946,428.567
            c0,26.755-21.768,48.524-48.524,48.524h-1.379v-69.818h-34.909v18.359c-10.643-6.479-23.131-10.213-36.475-10.213h-13.427v-14.393
            c19.157-9.735,32-29.751,32-51.934c0-17.223-7.689-33.439-20.587-44.387v-33.042c0-21.319,17.225-38.683,38.49-38.925v58.171
            h34.909v-58.17c21.264,0.242,38.49,17.606,38.49,38.925v33.041c-12.898,10.946-20.587,27.164-20.587,44.387
            c0,22.184,12.843,42.199,32,51.934V428.567z"/>
        </g>
      </g>
      <g>
        <g>
          <rect x="211.132" y="331.636" width="34.909" height="34.909"/>
        </g>
      </g>
      <g>
        <g>
          <rect x="350.768" width="34.909" height="512"/>
        </g>
      </g>
    </svg>
  )
}

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

const Resume = () => {
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