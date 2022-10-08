import React from "react"
import {
  faCoffee as CoffeeIcon,
  faCameraRetro,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons"
import "./Resume.scss"
import FlexItem from "../util/FlexItem"
import Timeline from "../util/Timeline"
import List from "../util/List"
import ProjectsComponent from "./ProjectsComponent"
import { IconItem } from "../util/IconItem"
import { faItunesNote } from "@fortawesome/free-brands-svg-icons"
import ViolinIcon from "./ViolinIcon"

const Name = ({ style, children }) => {
  return (
    <section style={style} className="name">
      <h1>{children}</h1>
    </section>
  )
}

const DoubleColumn = ({ children }) => {
  return (
    <div className="two-columns">
      {children && children.length > 1
        ? children.slice(0, 2).map((x, i) => (
            <div key={i} className="column">
              {x}
            </div>
          ))
        : ""}
    </div>
  )
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
      <Name style={{ minWidth: "300px" }}>Mohan Cao</Name>
      <DoubleColumn>
        <div>
          <Tagline>
            <p>
              Hi there! A warm welcome to my profile page. I don't update these
              taglines much because it's a waste of time for me, a waste of time
              for you reading this, and a general waste of space as well. To
              demonstrate that what I said was correct, I just wasted precious
              seconds of your life while you were reading this large blob of
              information that wasn't really information at all.
            </p>
            <p>Since you've read up to this point, why not continue reading?</p>
          </Tagline>
          <Timeline
            title="Work Experience"
            list={[
              {
                title: "Software Engineer",
                subtitle: "Amazon",
                date: "Present",
                description: [
                  "Working in the BwP team. Can't say much else, sorry!",
                ],
              },
              {
                title: "Software Engineer",
                subtitle: "Serato",
                date: "Jan 2019 - April 2022",
                description: [
                  "Did desktop software development with C++",
                  "Integrated streaming services with Serato DJ",
                  "Worked on a number of hotly requested features for Serato DJ soon after joining Serato: @see Serato DJ Day Mode",
                  "Been behind a number of quality of life improvements for our premier DJ software",
                  "Worked on Qt WebEngine features for the upsell of Serato DJ expansion packs",
                  "Did some hardware integration on the controllers of all time",
                ],
              },
              {
                title: "Software Engineering Intern",
                subtitle: "EROAD NZ",
                date: "Dec 2017 - March 2018",
                description: [
                  "Maintained automated backend maintenance tools",
                  "Backend development with Java + Spring MVC + React",
                ],
              },
            ]}
          />
          <Timeline
            title="Education"
            list={[
              {
                title: "Bachelor of Engineering",
                date: "May 2019",
                subtitle: "University of Auckland",
                description: [
                  "Specialising in Software Engineering",
                  "Graduated with First Class Honours 🔥",
                ],
              },
            ]}
          />
        </div>
        <div>
          <Timeline
            title="Contact me"
            list={[
              {
                description: "+NZ 22 O7l 3765",
              },
              {
                description: "mohancao@yahoo-com-au",
              },
              {
                description: "Sydney",
              },
            ]}
            condensed
          />
          <List
            title="Key Skills"
            items={[
              "Desktop app development",
              "AWS DevOps",
              "OOP",
              "Full stack development",
              "Human-computer interaction",
              "Computer and network security",
              "Performant computing",
            ]}
          />
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
  if (!json) return BasicInfo()
  return (
    <div className="Resume">
      <Name style={{ minWidth: "300px" }}>Mohan Cao</Name>
      <DoubleColumn>
        <div>
          <Tagline>
            {json.tagline.map((x, i) => (
              <p key={i}>{x}</p>
            ))}
          </Tagline>
          <Timeline title="Work Experience" list={json.work_experience} />
          <Timeline title="Education" list={json.education} />
        </div>
        <div>
          <Timeline
            title="Contact me"
            list={json.contact.map((x) => {
              return { description: <p>{x.description}</p> }
            })}
            condensed
          />
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

export default Resume
