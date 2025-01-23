import './App.scss';

import { Component, ReactNode } from 'react';

type Monster = {
  id: number;
  name: string;
};
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
          <input
            className="search-box"
            type="search"
            placeholder="search monsters"
            onChange={(event) => this.handleSearchChanged(event)}
          />
          {filteredMonsters.map((monster) => (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
