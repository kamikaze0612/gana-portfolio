import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Projects from "./Projects";
import Header from "../../ui/Header";
import { useEffect } from "react";

function Homepage() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => window.removeEventListener("scroll", isSticky);
  }, []);

  const isSticky = function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) header.classList.add("sticky");
    else header.classList.remove("sticky");
  };

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

export default Homepage;
