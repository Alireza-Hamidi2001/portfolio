import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import Projects from "../features/projects/Projects";
import Certificates from "../features/certificates/Certificates";
import Skills from "../features/skills/Skills";
import Header from "../layouts/header/Header";

function Home() {
    return (
        <>
            <Header />
            <About />
            <Contact />
            <Skills />
            <Projects />
            <Certificates />
        </>
    );
}

export default Home;
