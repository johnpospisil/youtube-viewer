import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = () => {};

  render() {
    return (
      <div className="search-bar">
        <form className="">
          <div className="form-group">
            <label>Video Search</label>
            <input
              className="form-control"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          {/* <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button> */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
