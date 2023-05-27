// import Header from "./components/Header"
// import Preloader from "./components/Preloader"
// import ProjectsList from "./components/Projects/ProjectsList"
import ProjectsList from "./components/ProjectsList"
import AnchorButton from "./components/AnchorButton"
// import { FaChevronUp } from "react-icons/fa"
// import Overlay from "./components/Overlays/Overlay"

function App() {
  return (
    <>
      <section className="relative container mx-auto h-screen max-h-[900px] pt-20 flex p-4 pb-0 flex-wrap justify-center items-center">
        <div className="w-1/2 flex-[1_1_30rem] h-full lg:flex hidden justify-center items-center">
          <img className="h-full grayscale-[50%] object-cover" src="/images/me.png" alt="me" />
        </div>
        <div className="w-1/2 flex-[1_1_30rem] text-center md:text-left flex flex-col">
          <h4
            className={`text-normal uppercase tracking-[0.5rem] font-normal text-accent`}
          >
            ahmad hassan
          </h4>
          <h2 className={`text-normal leading-10 text-white text-[2.5rem]`}>
            I&apos;m a <span className="text-accent">MERN Stack</span> <br />
            Developer
          </h2>
          <p
            className={`text-normal text-xs tracking-[2px] max-w-lg mx-auto my-5 md:mx-0`}
          >
            Extremely motivated to constantly develop my skills and grow professionally. I am
            confident in my ability to develop Full-stack Websites.
          </p>
          <div className="flex gap-4 justify-center md:justify-start items-center">
            <AnchorButton
              download={true}
              downloadName="Ahmad Hassan CV"
              link="/public/docs/resume 1752023.pdf"
              label="Download CV"
            />
            <AnchorButton
              inverseColors={true}
              nextAnchor={true}
              link="/contact"
              label="Contact"
            />

          </div>
        </div>
      </section>
      {/* <main className="in-cont">
        <div className="portfolio" id="portfolio">
          <h2>Portfolio</h2>
          <ProjectsList />
        </div>
      </main> */}
    </>
  )
}

export default App
