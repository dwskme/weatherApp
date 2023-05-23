import Icons from "./Icons"


const UVCard = () => {
  return (
    <div className="uvcard">
      <span className="uv-icon">
      <Icons imageName="sun.png"/>
      </span>
      <div className="uv-title">
        20 UVI
      </div>
      <span className="card-badge uv-level">
        Moderate
      </span>
      <div className="uv-desc">
        Moderate Risk from UV Rays.
      </div>
    </div>
  )
}

export default UVCard
