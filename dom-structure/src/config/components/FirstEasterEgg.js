import {settingsTitle, settingsText, settingsTagline} from "../../utils/configModel/organism.model.config";

export default {
  model: 'FirstEasterEgg',
  order : ['CouponId'],
  fields: [
      {
          name: 'Coupon Id',
          nameProperty: 'CouponId',
          typeField: 'Text',
          content: {
              responsive: ['A'],
              parameters: {},
              defaultValue: {
                  text: {}
              }
          },
          settings:  {
            responsive: ['M', 'T', 'D'],
            defaultValue: {}
        }
      },
  ]
};
