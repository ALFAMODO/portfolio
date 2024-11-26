import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Recents from "@/components/Recents";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shikshit Live</title>
        <meta name="description" content="I am a Data Scientist" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications/>
      <Recents/>
      <Projects/>
    </div>
  )
}
