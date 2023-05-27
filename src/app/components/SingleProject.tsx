
const SingleProject = (props:Project) => {

  
  return (
    <div className={`single${!props.completed ? " incomplete" : ""}`}>
      <img
        src={`/images/coming soon.png`}
        alt="coming soon"
        className="cmngSoon"
      />
      {props.styles && (
        <img
          style={props.styles}
          src={`${props.cover}`}
          alt=""
          className="cover"
        />
      )}
      {!props.styles && (
        <img src={`${props.cover}`} alt="" className="cover" />
      )}
      <div className="overlay">
        <h3>{props.name}</h3>
        {/* <p>
          Design Credit: <a href={props.designCredit.link}>{props.designCredit.name}</a>
        </p> */}
        <a href={props.link} target="_blank" className="link">
          Live Link
        </a>
      </div>
    </div>
  )
}

export default SingleProject