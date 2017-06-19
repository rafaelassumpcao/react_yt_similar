import React, { Component } from 'react';

/*const SearchBar = () => {
  return <input />
}*/

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};

    
  }

  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
    
  }

  render(){
    return (
      <div className="search-bar" >
        <input 
          value={this.state.term}
          onChange={ev => this.onInputChange(ev.target.value)} />
      </div>
    );
  }


}