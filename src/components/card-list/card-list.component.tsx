import { Component, ReactNode } from 'react';

import { Monster } from '../../types';

interface CardListProps {
  monsters: Monster[];
}

interface CardListState {}

class CardList extends Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
  }

  render(): ReactNode {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
