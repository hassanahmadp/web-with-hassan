import { getAllProjects } from '@/lib/getAllProjects'
import SingleProject from './SingleProject'

const ProjectData: Project[] = [
  {
    name: "Todo List Application with React.JS",
    completed: true,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://hassanahmadp.github.io/todo-fem-react/",
    cover: "/images/13.jpg",
  },
  {
    name: "Tip Calculator Application",
    completed: true,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://hassanahmadp.github.io/fem-tip-calc-junior/",
    cover: "/images/10.jpg",
  },
  {
    name: "Siawa portfolio",
    completed: true,
    designCredit: {
      name: "A Buyer",
      link: "#",
    },
    link: "https://muhammad-awais-art.github.io/portfolio/",
    cover: "/images/12.png",
  },
  {
    name: "across the pond",
    completed: true,
    designCredit: {
      name: "A Buyer",
      link: "#",
    },
    link: "https://hassanahmadp.github.io/atp/",
    cover: "/images/11.png",
  },
  {
    name: "Xotic labs",
    completed: true,
    styles: { objectPosition: "top" },
    designCredit: {
      name: "A Buyer",
      link: "#",
    },
    link: "https://hassanahmadp.github.io/xotic/",
    cover: "/images/xotic-login-html.png",
  },
  {
    name: "huddle landing page straight",
    completed: true,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://huddle-landing-page-straight.netlify.app/",
    cover: "/images/9.jpg",
  },
  {
    name: "clipboard landing page",
    completed: true,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://hassanahmadp.github.io/clipboard-landing-page/",
    cover: "/images/8.jpg",
  },
  {
    name: "testimonial grid section",
    completed: true,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://hassanahmadp.github.io/testimonial-grid-section/",
    cover: "/images/6.jpg",
  },
]

const ProjectsList =  () => {
  return (
    <main>
      {ProjectData.map((proj:Project) => (
        <SingleProject {...proj} />
      ))}
    </main>
  )
}

export default ProjectsList