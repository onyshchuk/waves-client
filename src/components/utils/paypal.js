import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
   render() {
      const onSuccess = payment => {
         // console.log(JSON.stringify(payment));

         this.props.onSuccess(payment);

         // {
         //    "paid": true,
         //    "cancelled": false,
         //    "payerID": "ZEBM9LJBL2F2Y",
         //    "paymentID": "PAYID-LVT5YHA8V063330AB838790X",
         //    "paymentToken": "EC-12X19343NF7009605",
         //    "returnUrl": "https://www.paypal.com/checkoutnow/error?paymentId=PAYID-LVT5YHA8V063330AB838790X&token=EC-12X19343NF7009605&PayerID=ZEBM9LJBL2F2Y",
         //    "address": {
         //       "recipient_name": "test buyer",
         //       "line1": "1 Main St",
         //       "city": "San Jose",
         //       "state": "CA",
         //       "postal_code": "95131",
         //       "country_code": "US"
         //    },
         //    "email": "onishchuk.alexander-buyer@gmail.com"
         // }
      };

      const onCancel = data => {
         console.log(JSON.stringify(data));
      };

      const onError = err => {
         console.log(JSON.stringify(err));
      };

      let env = 'sandbox';
      let currency = 'USD';
      let total = this.props.toPay;

      const client = {
         sandbox:
            'AfBAFxRD6zVhXmEmz8_-3uYL613JpFO6LK1lwq0NrKBTaJ1GCSZ_sfrLauPVJEZQzJ2QZ2tdwNST1_q0',
         production: '',
      };

      return (
         <div>
            <PaypalExpressBtn
               env={env}
               client={client}
               currency={currency}
               total={total}
               onError={onError}
               onSuccess={onSuccess}
               onCancel={onCancel}
               style={{
                  size: 'large',
                  color: 'blue',
                  shape: 'rect',
                  label: 'checkout',
               }}
            />
         </div>
      );
   }
}

export default Paypal;
