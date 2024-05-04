import "./App.css";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div class="fixed" id="animation-p1">
          <Hero title="Anhgelus Morhtuuzh" subtitle="Developer" />
        </div>
      </div>
      <div className="h-screen-half block w-full"></div>
      <div className="block w-full bg-indigo-950">
        <div
          className="bg-glass relative left-0 top-0 z-50 h-16 w-full"
          id="navbar"
        ></div>
        <div class="py-24" id={"skills"}>
          <Skills />
        </div>
      </div>
      <div className="block h-screen w-full"></div>
      <div className="block h-screen w-full"></div>
    </>
  );
}

export default App;
