
const SingleProject = (props:Project) => {

  
  return (
    <div className="flex-[1_1_30rem] h-96 relative overflow-hidden duration-700 [&:hover>div.projectOverlay]:translate-y-0">
      <img
        src={`/images/coming soon.png`}
        alt="coming soon"
        className={`${props.completed ? "hidden" : "block"} `}
      />
      {/* {props.styles && (
        <img
          style={props.styles}
          src={`${props.cover}`}
          alt=""
          className="w-full absolute hidden"
        />
      )} */}
      {/* {!props.styles && ( */}
      <img
        src={`${props.cover}`}
        alt=""
        className="w-full absolute h-full object-top top-0 left-0 object-cover overflow-hidden rounded-xl"
      />
      {/* )} */}
      <div className="projectOverlay absolute top-0 left-0 w-full h-full px-8 py-6 flex gap-3 flex-col justify-end items-start bg-[linear-gradient(transparent,rgba(0,0,0,0.85)_80%)] transition-transform duration-300 translate-y-[30%]">
        <h3 className="text-2xl font-bold capitalize">{props.name}</h3>
        {/* <p>
          Design Credit: <a href={props.designCredit.link}>{props.designCredit.name}</a>
        </p> */}
        <div className="flex gap-2">
          {props.repo && <a
            href={props.repo}
            target="_blank"
            className="py-1 px-5 bg-white text-black font-semibold hover:bg-accent hover:text-white rounded-md"
          >
            Repo
          </a>}
          <a
            href={props.link}
            target="_blank"
            className="py-1 px-5 bg-white text-black font-semibold hover:bg-accent hover:text-white rounded-md"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

export default SingleProject