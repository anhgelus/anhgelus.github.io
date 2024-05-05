import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import UniversityCareer from "./components/University.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <main>
      <div className="flex h-screen w-full items-center justify-center">
        <div class="fixed" id="animation-p1">
          <Hero title="Anhgelus Morhtuuzh" subtitle="Developer" />
        </div>
      </div>
      <div className="h-screen-half block w-full"></div>
      <section className="block w-full bg-indigo-950">
        <nav
          className="bg-glass relative left-0 top-0 z-50 h-16 w-full"
          id="navbar"
        ></nav>
        <div class="py-24" id={"skills"}>
          <Skills />
        </div>
      </section>
      <div class="divider"></div>
      <section className="block w-full bg-gradient-to-r from-indigo-900 to-slate-800 py-24">
        <UniversityCareer />
      </section>
      <div className="divider"></div>
      <section className="block w-full bg-slate-800 py-24">
        <Projects />
      </section>
      <div className="divider"></div>
    </main>
  );
}

export default App;
