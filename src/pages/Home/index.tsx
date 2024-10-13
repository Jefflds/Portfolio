import About from "../../ui/partials/About";
import { Hero } from "../../view/partials/Hero/Hero";
import Projects from "../../ui/partials/Projects";
import Services from "../../ui/partials/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
};

export default Home;
