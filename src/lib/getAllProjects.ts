const ProjectData: Project[] = [
  {
    name: "Todo List Application with React.JS",
    completed: true,
    featured: true,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    repo: "https://github.com/hassanahmadp/todo-fem-react",
    link: "https://hassanahmadp.github.io/todo-fem-react/",
    cover: "/images/13.jpg",
  },
  {
    name: "Tip Calculator Application",
    completed: true,
    featured: true,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://hassanahmadp.github.io/fem-tip-calc-junior/",
    repo: "https://github.com/hassanahmadp/fem-tip-calc-junior",
    cover: "/images/10.jpg",
  },
  {
    name: "Siawa portfolio",
    completed: true,
    featured: true,
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
    featured: true,
    designCredit: {
      name: "A Buyer",
      link: "#",
    },
    link: "https://hassanahmadp.github.io/atp/",
    repo: "https://github.com/hassanahmadp/atp",
    cover: "/images/11.png",
  },
  {
    name: "Xotic labs",
    completed: true,
    featured: false,
    styles: { objectPosition: "top" },
    designCredit: {
      name: "A Buyer",
      link: "#",
    },
    link: "https://hassanahmadp.github.io/xotic/",
    repo: "https://github.com/hassanahmadp/xotic",
    cover: "/images/xotic-login-html.png",
  },
  {
    name: "huddle landing page straight",
    completed: true,
    featured: false,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://huddle-landing-page-straight.netlify.app/",
    repo: "https://github.com/hassanahmadp/huddle-landing-page-straight",
    cover: "/images/9.jpg",
  },
  {
    name: "clipboard landing page",
    completed: true,
    featured: false,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://hassanahmadp.github.io/clipboard-landing-page/",
    repo: "https://github.com/hassanahmadp/clipboard-landing-page",
    cover: "/images/8.jpg",
  },
  {
    name: "testimonial grid section",
    completed: true,
    featured: false,
    designCredit: {
      name: "FrontEnd Mentor",
      link: "https://www.frontendmentor.io/",
    },
    link: "https://hassanahmadp.github.io/testimonial-grid-section/",
    repo: "https://github.com/hassanahmadp/testimonial-grid-section",
    cover: "/images/6.jpg",
  },
]

// export const getAllProjects = (): Promise<Project[]> => {
//   return new Promise((resolve, reject) => {
//     resolve(ProjectData)
//   })
// }
export const getAllProjects = (): Project[] => {
  return ProjectData
}
