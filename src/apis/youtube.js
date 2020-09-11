import axios from "axios";

const KEY = "AIzaSyChM11yWdEpbaX5tkrGOa9Buo3hZrc_2Ps";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
