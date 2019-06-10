import React, { Component } from "react";
import { FormInput, InputGroup } from "shards-react";

class SearchBar extends Component {
  render() {
    return (
      <InputGroup className="searchbar" size="sm" seamless>
        <FormInput inline="true" className="border-0" placeholder="Search..." />
      </InputGroup>
    );
  }
}

export default SearchBar;
