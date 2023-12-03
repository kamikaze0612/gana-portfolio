import { useEffect } from "react";

import Header from "../../ui/Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

function Homepage() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    const allLinks = document.querySelectorAll("a:link");

    // Setting navigation links
    allLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Getting href attribute
        const href = link.getAttribute("href");
        console.log("clicked");

        // Checking whether link is valid link or go to home link
        if (href === "#") {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          // Setting scroll behaviors for navigation links
        } else if (href.startsWith("#")) {
          e.preventDefault();
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

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
      <Contact />
    </>
  );
}

export default Homepage;
