import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProductBy } from '../../store/actions/products_actions';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import CardBlock from '../utils/card_block';

class Home extends Component {
   componentDidMount() {
      this.props.dispatch(getProductBy('sold'));
      this.props.dispatch(getProductBy('createdAt'));
   }

   render() {
      return (
         <div>
            <HomeSlider />
            <CardBlock
               list={this.props.products.bySell}
               title="Best selling guitars"
            />
            <HomePromotion />
            <CardBlock
               list={this.props.products.byArrival}
               title="New arrivals"
            />
         </div>
      );
   }
}

const mapStateToProps = state => ({
   products: state.products,
});

export default connect(mapStateToProps)(Home);
