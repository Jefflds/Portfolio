import About from "../../ui/partials/About";
import { Hero } from "../../view/partials/Hero/Hero";
import Services from "../../ui/partials/Services";
import Projects from "../../view/partials/Projects/Projects";

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
