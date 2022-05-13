import {Card} from "react-bootstrap"
import {useRef, useState} from "react"

const Show = ({name, imageMedium, imageOriginal, premierDate, endDate, season, episode}) => {

  const bellRef = useRef()
  const [isBellClicked, setIsBellClicked] = useState(false)

  const handleBellClick = () => {
    isBellClicked ? bellRef.current.style.color = "gray" : bellRef.current.style.color = "orange"
    setIsBellClicked(prevState => !prevState)
  }

  const showBell = () => {
    bellRef.current.style.visibility = "visible"
  }

  const hideBell = () => {
    if (!isBellClicked)
      bellRef.current.style.visibility = "hidden"
  }

  const handleImageClick = () => {
    window.open(imageOriginal)
  }

  return (
    <Card className="show-card" onMouseOver={showBell} onMouseOut={hideBell}>
      <img src={imageMedium} onClick={handleImageClick} alt=""/>
      <i id="image" onClick={handleBellClick} ref={bellRef} className="fa-regular fa-bell"/>
      <Card.Body className="show-card-body">
        <h1 className="show-card-heading">{name}</h1>
        <p>{premierDate.substring(0, 4)}{endDate ? `-${endDate.substring(0, 4)}` : ""}</p>
        <div className="show-card-season">
          <span>Season: {season}, Episode: {episode}</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Show