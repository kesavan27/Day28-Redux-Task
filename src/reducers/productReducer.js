const initialState = {
    showDescription: {},
    selectedQuantity: {},
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_DESCRIPTION':
        return {
          ...state,
          showDescription: {
            ...state.showDescription,
            [action.payload]: !state.showDescription[action.payload],
          },
        };
      case 'UPDATE_QUANTITY':
        const newQuantity = (state.selectedQuantity[action.payload.id] || 1) + action.payload.quantity;
        return {
          ...state,
          selectedQuantity: {
            ...state.selectedQuantity,
            [action.payload.id]: Math.max(0, newQuantity), // Allow quantity to be zero
          },
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  