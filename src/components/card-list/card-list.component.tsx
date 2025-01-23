import { Component, ReactNode } from 'react';

import { Monster } from '../../types';
import CardItem from '../card-item/card-item.component';

import './card-list.styles.scss';

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
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardItem monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
