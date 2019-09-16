import React from 'react';
import Card from '../utils/card';

const CardBlock = props => {
   const renderCards = () => {
      console.log(props.list);
      return props.list
         ? props.list.map((card, i) => <Card key={i + card.name} {...card} />)
         : null;
   };

   return (
      <div className="card_block">
         <div className="container">
            {props.title ? <div className="title">{props.title}</div> : null}
            <div
               style={{
                  display: 'flex',
                  flexWrap: 'wrap',
               }}
            >
               {renderCards()}
            </div>
         </div>
      </div>
   );
};

export default CardBlock;
