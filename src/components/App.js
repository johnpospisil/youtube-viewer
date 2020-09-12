import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // Set the list of videos as 'state'.
    // console.log(response);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
