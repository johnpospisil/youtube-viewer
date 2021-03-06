import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <form className="" onSubmit={this.onFormSubmit}>
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
