import React from 'react';

import MyButton from '../utils/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const ProdNfo = props => {
   const showProdTags = detail => (
      <div className="product_tags">
         {detail.shipping && (
            <div className="tag">
               <div>
                  <FontAwesomeIcon icon={faTruck} />
               </div>
               <div className="tag_text">
                  <div>Free shipping</div>
                  <div>And return</div>
               </div>
            </div>
         )}
         {
            <div className="tag">
               <div>
                  <FontAwesomeIcon
                     icon={detail.available ? faCheck : faTimes}
                  />
               </div>
               <div className="tag_text">
                  <div>{detail.available ? 'Available' : 'Not available'}</div>
                  <div>{detail.available ? 'in store' : 'preorder only'}</div>
               </div>
            </div>
         }
      </div>
   );

   const showProdActions = detail => (
      <div className="product_actions">
         <div className="price">$ {detail.price}</div>
         <div className="cart">
            <MyButton
               type="add_to_cart_link"
               runAction={() => props.addToCart(detail._id)}
            />
         </div>
      </div>
   );

   const showProdSpecifications = detail => (
      <div className="product_specifications">
         <h2>Specs:</h2>
         <div>
            <div className="item">
               <strong>Frets:</strong> {detail.frets}
            </div>
            <div className="item">
               <strong>Wood:</strong> {detail.wood.name}
            </div>
         </div>
      </div>
   );

   return (
      <div>
         <h1>
            {props.detail.brand.name} {props.detail.name}
         </h1>
         <p>{props.detail.description}</p>
         {showProdTags(props.detail)}
         {showProdActions(props.detail)}
         {showProdSpecifications(props.detail)}
      </div>
   );
};

export default ProdNfo;
