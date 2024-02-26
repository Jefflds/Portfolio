// import Header from "./ui/partials/Header";
// import Home from "./pages/Home";
// import Footer from "./ui/partials/Footer";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div>
      {init && <Particles options={particlesOptions as ISourceOptions} />}
      
    </div>
  );
};

export default App;
