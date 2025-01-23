import { Component, ReactNode } from 'react';

import './card-item.styles.scss';
import { Monster } from '../../types';

interface CardItemProps {
  monster: Monster;
}

interface CardItemState {}

class CardItem extends Component<CardItemProps, CardItemState> {
  constructor(props: CardItemProps) {
    super(props);
  }
  render(): ReactNode {
    const { email, id, name } = this.props.monster;

    return (
      <div className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardItem;
