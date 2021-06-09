
const LocationInfoBox = ({ info }) => {


  return (
    <div className="location-info">
      <h2>{info.title}</h2>
      <ul>
        <li>ID: <strong>{ info.id }</strong></li>
        <li>LINK: <strong>{ info.link }</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
