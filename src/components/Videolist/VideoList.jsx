import { Video } from "./Video/Video";

export const VideoList = ({ list }) => {
  return list.map(item => <Video url={item.url} date={item.date} />);
}
