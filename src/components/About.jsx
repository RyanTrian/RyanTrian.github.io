import React from 'react'

import Container from './TextComponents/Container'
import Image from './TextComponents/Image'
import Title from './TextComponents/Title'
import Heading from './TextComponents/Heading'
import Paragraph from './TextComponents/Paragraph'

const { title, src, heading, content } = {
  title: "Hi, I'm Minh",
  src: "https://user-images.githubusercontent.com/82792300/230150572-d19a2764-1017-4626-9c2b-7583a15c8bf0.jpg",
  heading: "My Contact Info",
  content: [
    "I recently earned a Full Stack Web Development Certificate from the University of Minnesota on February 2023.", 
    "I graduated with a Bachelor of Science in Biology from the Colorado State University, Fort Collins on May 2020.", 
    "I'm passionate about bringing ideas online, also, sharing and teaching new concept.",
    "I love food, movies, gaming, and reading.",
    "An update version of my resume can be found <a>/resume<a>here"
  ]
}

const contact = [
  "Find me on <a>https://github.com/RyanTrian<a>Github",
  "Connect with me on <a>https://www.linkedin.com/in/minhtruong49/<a>LinkedIn",
  "Email me at <a>mailto:mptruong49@gmail.com<a>mptruong49@gmail.com"
]

export default function About() {
  return (
    <Container>
      <Image src={src} />
      <div className='pt-6'>
        <Title title={title} />
        <Paragraph content={content} />
        <Heading heading={heading} />
        <Paragraph content={contact} />
      </div>
    </Container>
  )
}
