import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    search: '',
  };
  searchbarImputChange = el => {
    this.setState({ search: el.target.value });
  };
  searchbarSubmit = el => {
    el.preventDefault();
    this.props.getSearch(this.state.search);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.searchbarSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.searchbarImputChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
