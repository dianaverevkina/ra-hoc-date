import { DateTime } from "./DateTime/DateTime"
import { DateTimePretty } from "./DateTimePretty/DateTimePretty"

export const Video = ({date, url}) => {
  return (
    <div className="video">
        <iframe src={url} title="Video" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <DateTimePretty Component={DateTime} date={date}/>
    </div>
  )
}
