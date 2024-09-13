export const toggleDescription = (id) => ({
    type: 'TOGGLE_DESCRIPTION',
    payload: id,
  });
  
  export const updateQuantity = (id, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity },
  });
  