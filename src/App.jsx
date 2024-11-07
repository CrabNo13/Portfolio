import './App.css'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Tv } from '../elements/Tv'
import { Phone } from '../elements/Phone'
import { Navbar } from '../components/navbar'
import { HomePage } from '../elements/Homepage'
import { AboutMe } from '../elements/AboutMe'
import { PhoneMe } from '../elements/PhoneMe'
import { Projects } from '../elements/Projects'
import { ProjectItems } from '../elements/ProjectItems'
import { Skills } from '../elements/Skills'
import { SkillIcons } from '../elements/SkillIcons'
import { Experience } from '../elements/Experience'
function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#be32ff",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 25,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 7, max: 14 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <HomePage />
        <div className='aboutSection'>
          <AboutMe />
          <Tv />
        </div>
        <div className='contactSection'>
          <PhoneMe />
          <Phone />
        </div>
        <div className='projectsSection'>
          <Projects />
          <ProjectItems />
        </div>
        <div className='skillsSection'>
          <Skills />
          <SkillIcons />
        </div>
        <Experience />
        <Navbar />
      </>
    )
  }
}

export default App
