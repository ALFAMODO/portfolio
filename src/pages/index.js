import About from "@/components/About";
import Education from "@/components/Education";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
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
      <Education />
      <Projects/>
    </div>
  )
}
