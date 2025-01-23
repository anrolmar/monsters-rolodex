import './App.scss';

import { Component, ReactNode } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { Monster } from './types';

interface StateComponent {
  monsters: Monster[];
  searchField: string;
}

class App extends Component<object, StateComponent> {
  constructor(props: object) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(): void {
    void fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users: Monster[]) =>
        this.setState(() => ({
          monsters: users,
        })),
      );
  }

  handleSearchChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => ({ searchField }));
  }

  render(): ReactNode {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));

    return (
      <>
        <div className="App">
          <h1 className="app-title">Monster Rolodex</h1>
          <SearchBox
            className="monsters-search-box"
            onChangeHandler={(event) => this.handleSearchChanged(event)}
            placeHolder="search monsters"
          />
          <CardList monsters={filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
