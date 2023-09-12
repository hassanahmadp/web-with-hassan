import { AnchorButton } from "@/components"
import Link from "next/link"

const AboutPage = () => {
  return (
    <section className="relative min-h-screen">
      <div className="h-full absolute top-0 l0 w-1/2 min-w-[30rem]"></div>
      <div className="container px-8 mx-auto relative pb-24 pt-32">
        <h2 className={`font-bold leading-10 text-center text-white text-[2.5rem] uppercase`}>
          about me
        </h2>
        <p className="text-center text-darkTextColor mt-4 max-w-lg mx-auto">
          Here you will find more information about me, what I do, and my current skills mostly in
          terms of programming and technology
        </p>
        <div className="flex flex-wrap gap-10">
          <div className="flex-[1_1_30rem] justify-center text-left flex flex-col ">
            {/* <h4 className={`text-normal uppercase tracking-[0.5rem] font-normal text-accent`}>
              about me
            </h4> */}
            {/* <h2 className={`font-bold leading-10 text-white text-[2.5rem]`}>
              A dedicated Full-stack Developer based in{" "}
              <span className="text-accent">Lahore, Pakistan </span>
            </h2> */}
            <div
              className={`text-normal text-xs flex flex-col gap-4 tracking-[2px] text-darkTextColor leading-6 mb-5 mt-10 
              `}
            >
              <p>
                I am a <strong className="text-white">Front-end Web Developer</strong> who creates
                the front-end of websites and web applications that drives the success of the entire
                product. Check out some of my work in the{" "}
                <Link className="text-accent hover:underline" href="/projects">
                  Projects
                </Link>{" "}
                section.
              </p>
              <p>
                I also like to share content related to things I've learned over the years in{" "}
                <strong className="text-white">Web Development</strong> so that it can help other
                people in the Dev community. Feel free to join or follow me on my{" "}
                <a className="text-accent hover:underline" href="/">
                  Linkedin
                </a>{" "}
                where I post useful content related to web development and programming
              </p>
              <p>
                I am open to <strong className="text-white">Work</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that matches my skills
                and experience, then don't hesitate to{" "}
                <Link className="text-accent hover:underline" href="/contact">
                  Contact Me
                </Link>
                .
              </p>
              <AnchorButton
                additionalClass="mt-5 inline"
                link="/contact"
                label="CONTACT"
                inverseColors
              />
            </div>
          </div>
          <div className="flex-[1_1_30rem] flex justify-center items-center pointer-events-none">
            {/* <img
              className="rounded-2xl h-full max-w-[40rem] w-full min-h-[30rem] object-cover"
              src="/images/about_image.jpg"
              alt="about"
            /> */}
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
    </section>
  )
}

// I am a front-end web developer who creates the front-end of websites and web applications that drives the success of the entire product. Check out some of my work in the Projects section.

// I also like to share content related to things I've learned over the years in web development so that it can help other people in the Dev community. Feel free to join or follow me on my Linkedin where I post useful content related to web development and programming

// I am open to work opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me.
export default AboutPage
