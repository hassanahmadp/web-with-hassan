// import Header from "./components/Header"
// import Preloader from "./components/Preloader"

import { BsLinkedin, BsGithub } from "react-icons/bs"
import Image from "next/image"
import { AnchorButton, ProjectsList } from "@/components"
// import VantaContainer from "@/components/VantaContainer"
// import { FaChevronUp } from "react-icons/fa"
// import Overlay from "./components/Overlays/Overlay"

function App() {
  return (
    <>
      <section className="relative container mx-auto h-[100vh] min-h-[500px] py-20 flex p-4 flex-wrap justify-center items-center">
        <div className="w-1/2 flex-[1_1_30rem] h-full lg:flex hidden justify-center items-center">
          {/* <Image
            height={800}
            className="w-auto h-full grayscale-[50%] object-cover"
            width={800}
            src="/images/me.png"
            alt="me"
          /> */}
          <div className="relative bg-white aspect-square rounded-full h-96 overflow-hidden z-10 [&:hover>.borderOverlay]:rotate-180">
            <div className="borderOverlay aspect-square absolute top-0 left-0 w-[calc(100%)] scale-105 h-[calc(100%)] transition-all ease-in-out duration-500 border-accent border-b-white border-l-blackFour  z-20 rounded-full border-[1.5rem]"></div>
            <Image
              height={800}
              className="absolute z-10 top-6 left-0 w-[calc(150%-1rem)] scale-110 h-full object-cover"
              width={800}
              src="/images/me with bg.jpg"
              alt="me"
            />
          </div>
          {/* <img className="h-full grayscale-[50%] object-cover" src="/images/me.png" alt="me" /> */}
        </div>
        <div className="w-1/2 flex-[1_1_30rem] text-center md:text-left flex flex-col">
          <h4 className={`text-normal uppercase tracking-[0.5rem] font-normal text-accent`}>
            ahmad hassan
          </h4>
          <h2 className={`font-black leading-10 text-white max-w-md text-[2.5rem] mx-auto md:mx-0`}>
            I&apos;m a UI / UX <span className="text-accent">Developer</span> <br />
          </h2>
          <p
            className={`text-normal text-xs tracking-[2px] leading-6 max-w-lg mx-auto mb-5 mt-3 text-darkTextColor md:mx-0`}
          >
            Extremely motivated to constantly develop my skills and grow professionally. I am
            confident in my ability to develop Full-stack Websites.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 justify-center md:justify-start flex-wrap items-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-ahmad-hassan-1b86b8205/"
              >
                <BsLinkedin className="text-white hover:text-accent text-3xl" />
              </a>
              <a target="_blank" href="https://github.com/hassanahmadp">
                <BsGithub className="text-accent hover:text-white text-3xl" />
              </a>
            </div>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap items-center">
              <AnchorButton
                additionalClass="flex-[0_1_7rem] max-[425px]:flex-[0_1_30rem] text-center whitespace-nowrap"
                download={true}
                downloadName="Ahmad Hassan CV"
                link="/public/docs/Muhammad Ahmad Hassan v0.0.2.pdf"
                label="Download CV"
              />
              <AnchorButton
                additionalClass="flex-[0_1_7rem] max-[425px]:flex-[0_1_30rem] text-center whitespace-nowrap"
                inverseColors={true}
                nextAnchor={true}
                link="/contact"
                label="Contact"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative">
        <div className="h-full absolute top-0 l0 w-1/2 min-w-[30rem] bg-blackTwo"></div>
        <div className="container px-8 mx-auto relative py-24">
          <div className="flex flex-wrap gap-10">
            <div className="flex-[1_1_30rem] justify-center text-left flex flex-col ">
              <h4 className={`text-normal uppercase tracking-[0.5rem] font-normal text-accent`}>
                about me
              </h4>
              <h2 className={`font-bold leading-10 text-white text-[2.5rem]`}>
                A dedicated Full-stack Developer based in{" "}
                <span className="text-accent">Lahore, Pakistan </span>
              </h2>
              <p className={`text-normal text-xs tracking-[2px] leading-6 mb-5 mt-10 opacity-70`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum impedit deleniti
                repellendus doloribus, ut omnis ad quibusdam voluptas sequi, ducimus suscipit ex
                debitis illo, commodi delectus provident minima! Laborum nihil doloribus dolorem non
                deserunt voluptatem eligendi voluptatibus, iure nulla repellendus ratione id neque
                expedita quae tempore alias atque vitae illum, impedit corrupti. Deserunt vero minus
                magnam obcaecati ratione, alias, mollitia neque quibusdam facere vel tempore
                recusandae dignissimos aspernatur nostrum corrupti similique, aliquam porro quaerat
                reprehenderit eos excepturi totam. Minus facere consequuntur neque blanditiis
                architecto eligendi dolore tenetur quisquam soluta aut error a eius, quod
                consequatur rem aliquid? Neque, quod tempore?
              </p>
            </div>
            <div className="flex-[1_1_30rem] flex justify-center items-center pointer-events-none">
              <img
                className="rounded-2xl h-full max-w-[40rem] w-full min-h-[30rem] object-cover"
                src="/images/about_image.jpg"
                alt="about"
              />
            </div>
          </div>
        </div>
        <div className="container px-8 mx-auto relative py-24">
          <div className="flex flex-wrap gap-4">
            <div className="flex-[1_1_20rem] px-4 py-12 flex flex-col justify-center items-center text-center gap-4">
              <h3 className="font-black text-accent text-9xl">12</h3>
              <p className="text-3xl relative left-3 font-bold">Years Experience</p>
            </div>
            <div className="flex-[2_1_40rem] flex flex-wrap gap-4">
              <div className="flex-[1_1_20rem] px-4 py-12 bg-blackThree flex flex-col justify-center items-center text-center gap-2">
                <h3 className="text-accent text-4xl font-extrabold">60+</h3>
                <span className="font-light opacity-60 text-xl">Clients</span>
              </div>
              <div className="flex-[1_1_20rem] px-4 py-12 bg-blackThree flex flex-col justify-center items-center text-center gap-2">
                <h3 className="text-accent text-4xl font-extrabold">08</h3>
                <span className="font-light opacity-60 text-xl">Years Experience</span>
              </div>
              <div className="flex-[1_1_20rem] px-4 py-12 bg-blackThree flex flex-col justify-center items-center text-center gap-2">
                <h3 className="text-accent text-4xl font-extrabold">122+</h3>
                <span className="font-light opacity-60 text-xl">Completed Projects</span>
              </div>
              <div className="flex-[1_1_20rem] px-4 py-12 bg-blackThree flex flex-col justify-center items-center text-center gap-2">
                <h3 className="text-accent text-4xl font-extrabold">10</h3>
                <span className="font-light opacity-60 text-xl">Achivements</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="relative">
        <div className="container"></div>
      </section> */}
      {/* <section className="relative">
        <div className="container mx-auto py-24">
          <h2 className="uppercase font-bold text-4xl">featured projects</h2>
          <p className="font-light opacity-60 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <ProjectsList />
        </div>
      </section> */}
      {/* <main className="in-cont">
        <div className="portfolio" id="portfolio">
          <h2>Portfolio</h2>
        </div>
      </main> */}
    </>
  )
}

export default App
