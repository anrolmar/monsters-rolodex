import { Component, ReactNode } from 'react';

import './search-box.styles.scss';

interface SearchBoxProps {
  className: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

interface SearchBoxState {}

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  constructor(props: SearchBoxProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeHolder}
        onChange={(event) => this.props.onChangeHandler(event)}
      />
    );
  }
}

export default SearchBox;
