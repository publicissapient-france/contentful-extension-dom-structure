import update from 'react-addons-update';

const visibility = (state = [], action) => {
  switch (action.type) {
      case 'TOGGLE_FORM_ADD_SECTION':

        return update(state, {
          openFormAddSection: { $set: !state.openFormAddSection }
        });
      case 'GET_VISIBILITY_FORM_ADD_SECTION':
        return state;

      default:
        return state;
      }
  console.log('VISIBILITY', state);
};

export default visibility;
