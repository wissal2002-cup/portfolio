import styles from "./App.module.css";

import {Header} from "./components/Header";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {Hero} from "./components/Hero";
import {Contact} from "./components/Contact";
import {Skills} from "./components/Skills";




function App() {

  return (
    <>
    <div className={styles.App}>
      <Header/>
      <Hero />      
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </>
  );
}

export default App;
