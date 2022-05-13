import Show from "./Show"
import {useState} from "react"
import {Button} from "react-bootstrap"

const SingleDayShows = ({singleDayShows, date}) => {

  const [showsCompact, setShowsCompact] = useState(true)

  const renderShows = () => {
    const shows = []
    for (let i = 0; i < singleDayShows.length; i++) {
      const item = singleDayShows[i]
      if (showsCompact && i === 2)
        break
      shows.push(
        <Show key={item.id + i}
              name={item.show.name}
              imageMedium={item.show.image.medium}
              imageOriginal={item.show.image.original}
              premierDate={item.show.premiered}
              endDate={item.show.ended}
              season={item.season}
              episode={item.number}
        />)
    }
    return shows
  }
  if (!singleDayShows) return <h2>Fetching data...</h2>

  return (
    <div className="single-day">
      <div className="single-day-date-container">
        <h1 className="single-day-date-heading">{date}</h1>
      </div>
      {singleDayShows.length > 0 ?
        <>
          {renderShows()}
          {singleDayShows.length > 2 &&
            <Button variant="secondary" onClick={() => setShowsCompact(prevState => !prevState)}>
              {showsCompact
                ? <span>{singleDayShows.length - 2} more shows<i className="fa-solid fa-chevron-down"/></span>
                : <span>show popular<i className="fa-solid fa-chevron-up"/></span>
              }
            </Button>
          }
        </> :
        <h4 style={{margin: "auto", padding: "20px"}}>No shows for today!</h4>
      }
    </div>
  )
}

export default SingleDayShows