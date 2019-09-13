import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/user_actions';

import MyButton from '../utils/button';

class Card extends Component {
   renderCardImage(images) {
      if (images.length > 0) return images[0].url;
      else return '/images/image_not_available.png';
   }

   render() {
      return (
         <div className={`card_item_wrapper ${this.props.grid}`}>
            <div
               className="image"
               style={{
                  background: `url(${this.renderCardImage(
                     this.props.images
                  )}) no-repeat`,
               }}
            />
            <div className="action_container">
               <div className="tags">
                  <div className="brand">{this.props.brand.name}</div>
                  <div className="name">{this.props.name}</div>
                  <div className="name">${this.props.price}</div>
               </div>
               {this.props.grid ? (
                  <div className="description">
                     <p>{this.props.description}</p>
                  </div>
               ) : null}
               <div className="actions">
                  <div className="button_wrapp">
                     <MyButton
                        type="default"
                        altClass="card_link"
                        title="View product"
                        linkTo={`/product_detail/${this.props._id}`}
                        style={{
                           margin: '10px 0 0 0',
                        }}
                     />
                  </div>
                  <div className="button_wrapp">
                     <MyButton
                        type="bag_link"
                        runAction={() =>
                           this.props.user.userData.isAuth
                              ? this.props.dispatch(addToCart(this.props._id))
                              : console.log('you need to log in')
                        }
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Card);
