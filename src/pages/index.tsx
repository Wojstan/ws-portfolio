import { Paragraph, AnimatedDeveloper, Subtitle } from 'components/common'
import { NavMenu } from 'components/layout/NavMenu'
import { Section } from 'components/layout/Section'
import { aboutMe, someSeriousStuff } from 'constants/about'
import { welcome } from 'constants/welcome'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Wojciech Staniszewski</title>
      </Head>

      <Section light>
        <div className="flex justify-center h-40 mb-16">
          <img className="rounded-full" src="/img/avatar.png" alt="avatar" />
        </div>

        <h1 className="text-5xl font-black mb-4 text-main">{welcome.title}</h1>

        <AnimatedDeveloper />

        <Paragraph>{welcome.text}</Paragraph>

        <NavMenu />

        <div className="text-sm text-center w-full text-gray-300 font-light tracking-widest absolute bottom-3 right-0">
          Wojciech Staniszewski ©
        </div>
      </Section>

      <Section className="relative" id="about">
        <div className="mb-16">
          <Subtitle>{aboutMe.title}</Subtitle>
          <Paragraph>{aboutMe.text}</Paragraph>
        </div>

        <Subtitle>{someSeriousStuff.title}</Subtitle>
        <Paragraph>{someSeriousStuff.text}</Paragraph>

        <ul className="list-disc max-w-screen-lg m-auto mt-6">
          {someSeriousStuff.stuff.map((point, index) => (
            <li key={index} className="text-light text-justify mb-3">
              <Paragraph>{point}</Paragraph>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
