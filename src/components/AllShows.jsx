import {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import SingleDayShows from "./SingleDayShows"
import {Button} from "react-bootstrap"

const Shows = () => {

  const [showsData, setShowsData] = useState([])
  const date = useLocation().state.date
  const [lastDate, setLastDate] = useState(0)

  useEffect(() => {
    if (date)
      fetchShowsData()
  }, [date])

  const fetchShowsData = async () => {
    const newDate = subtractDay(date, lastDate)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() >= 9 ? (newDate.getMonth() + 1) : "0" + (newDate.getMonth() + 1)
    const day = newDate.getDate() >= 10 ? newDate.getDate() : "0" + newDate.getDate()
    const response = await fetch(`https://api.tvmaze.com/schedule?country=US&date=${year}-${month}-${day}`)
    const shows = await response.json()
    sortByPopularity(shows)
    setLastDate(prevState => prevState + 1)
    setShowsData(prevData => {
      return [...prevData, shows]
    })
  }

  const subtractDay = (date, numOfDays) => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - numOfDays)
    return newDate
  }

  const sortByPopularity = (shows) => {
    shows.sort((a, b) => {
      return a.show.weight > b.show.weight ? -1 : 1
    })
  }

  const formatDate = (index) => {
    const newDate = subtractDay(date, index)
    return `${newDate.getDate()} ${newDate.toLocaleDateString("en-US", {month: "long", year: "numeric"})}`
  }

  const renderAllShows = () => {
    return showsData.map((singleDayShows, index) => {
      return <SingleDayShows key={index} singleDayShows={singleDayShows} date={formatDate(index)}/>
    })
  }

  return (
    <div className="shows">
      {renderAllShows()}
      <Button className="btn-load-more" onClick={fetchShowsData}>Load more</Button>
    </div>
  )

}

export default Shows