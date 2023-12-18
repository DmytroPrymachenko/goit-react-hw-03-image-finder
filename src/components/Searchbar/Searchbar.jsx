import React, { Component } from 'react';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.Staled';

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
      <HeaderSearchbar>
        <SearchForm onSubmit={this.searchbarSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.searchbarImputChange}
            value={this.state.value}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}
