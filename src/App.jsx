import Calendar from "react-calendar"
import {useEffect, useState} from "react"
import tvImage from "./assets/tv-icon.png"
import {useNavigate} from "react-router-dom"
import 'react-calendar/dist/Calendar.css'

function App() {

  const navigate = useNavigate()
  const [date, setDate] = useState(null)

  useEffect(() => {
    const handleDate = () => {
      navigate("/shows", {state: {date}})
    }
    if (date)
      handleDate()
  }, [date])

  return (
    <div className="app">
      <img src={tvImage} className="tv-image" alt=""/>
      <h6>To get a list of available shows please select a date</h6>
      <Calendar onChange={setDate} value={date}/>
    </div>
  )
}

export default App
