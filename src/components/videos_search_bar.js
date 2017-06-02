import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" ref="search"/>
        <span className="input-group-btn">
          <button id="searchButton" className="btn btn-default" type="button" onClick={(event) => this.props.onSearchTerm(this.refs.search.value)}>Submit</button>
        </span>
      </div>
    )
  }
}

export default SearchBar;
