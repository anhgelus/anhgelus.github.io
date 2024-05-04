import "./App.css";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-16 w-full" id="navbar">
        <div className="bg-glass h-16 w-full">Hello, I'm kind</div>
      </div>
      <div className="flex h-screen w-full items-center justify-center">
        <div class="fixed" id="animation-p1">
          <Hero title="Anhgelus Morhtuuzh" subtitle="Developer" />
        </div>
      </div>
      <div className="block h-screen w-full"></div>
      <div className="block h-screen w-full"></div>
      <div className="block h-screen w-full"></div>
      <div className="block h-screen w-full"></div>
    </>
  );
}

export default App;
