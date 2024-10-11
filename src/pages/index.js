import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Head from "next/head";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Accordion from "../components/accordion";
import FadeIn from "../components/fade-in";
import Link from "../components/link";
import NavLink from "../components/navlink";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef(null);
  const [colorToggle, setColorToggle] = useState(false);

  useEffect(() => {
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 200px',
        end: 'bottom',
        scrub: true,
        onEnter: () => setColorToggle(true),
        onLeave: () => setColorToggle(false),
        onEnterBack: () => setColorToggle(true),
        onLeaveBack: () => setColorToggle(false),
      });
  
      setTimeout(() => {
        trigger.refresh();
      }, 1000);
  
      return () => trigger.kill();
  }, [ref]);


  const getColorClasses = () => colorToggle ? 
  `dark-color-theme font-[400] antialiased transition-all duration-300 holla-normal min-h-[100vh] px-4`
  : `light-color-theme text-[#1D1D1D] font-[400] antialiased transition-all duration-300 holla-normal min-h-[100vh] px-4`;

  return (
    <>
      <Head>
        <title>David Swanberg</title>
      </Head>
      <main
        className={getColorClasses()}
      >
        <div className="nav-container z-[1]">
          <nav className="flex justify-end max-w-[1400px] mx-auto">
            <ul className="flex gap-8 font-sans">
              <li>
                <NavLink id="about" itemIsText hoverItem="📖">About</NavLink>
              </li>
              <li>
                <NavLink id="work" hoverItem="https://media.giphy.com/media/efUcLJePY6RkA/giphy.gif">Work</NavLink>
              </li>
              <li>
                <NavLink id="contact" itemIsText hoverItem="🤝">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col pb-6 lg:pb-20 h-[100vh] justify-end">
              <FadeIn>
                <div className="text-4xl lg:text-7xl mr-auto">David Swanberg is a front-end web developer. With a focus on blending clean design and cutting-edge technology, he has helped brands across various industries bring their ideas to life online.</div>
              </FadeIn>
            </div>
          <FadeIn>
          <div id="about" className="pb-36 pt-[120px] lg:pt-[64px] max-w-[1400px] mx-auto">
            <div className="text-xl lg:text-3xl max-w-[900px]">David currently works as Creative Technologist at Athletics, a creative studio in Brooklyn NY. With several years of digital agency experience, he has had the privelege of working with notable clients such as <span className="italic">(1)Amazon Design Community (2)Makers Mark (3)Texas Roadhouse (4)Turf.design (5)Guild Education (6)The New York Review of Books and (7)KY Fish and Wildlife</span></div>
            <div className="pt-10 flex gap-8"> 
              <Link href="https://github.com/davidswanberg" hoverImg="/mac2.jpg" >Github</Link>
              <Link href="https://www.linkedin.com/in/david-swanberg/" hoverImg="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDk2dnA3Zzg3MGt0bW80d3hnanVnbWUxNTExaDNmbHh6N2wyNHBsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pHb82xtBPfqEg/giphy.gif">LinkedIn</Link>
            </div>
          </div>
          </FadeIn>
        </div>
        <div ref={ref}>
          <div id="work" className="max-w-[1400px] min-h-[50vh] mx-auto pb-36 scroll-mt-[144px]">
            <h3 className="pb-4 font-sans">Selected Work</h3>
            <Accordion />
          </div>
          <div id="contact" className="max-w-[1400px] min-h-[50vh] mx-auto flex justify-center items-center pb-36">
            <a href="mailto:davidswanberg767@gmail.com" className="pb-4 text-8xl">Get In Touch</a>
          </div>
        </div>
      <footer className="w-full py-6 border-t footer-container">
        <div className="max-w-[1440px] mx-auto flex">
          <ul className="flex gap-2 font-sans">
            <li>
              <a href="mailto:davidswanberg767@gmail.com">Email</a>
            </li>/
            <li>
              <a href="/contact">LinkedIn</a>
            </li>/
            <li>
              <a href="/work">Github</a>
            </li>/
          </ul>
          <span className="font-sans ml-2">Resume available upon request.</span>
        </div>
      </footer>
      </main>
    </>
  );
}
