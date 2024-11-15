// Ngoc Minh NGO - 103496945

// Cart Reducer - handles the state of the cart
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
    // Adding item to the cart by spreading the existing state and adding a new item with quantity 1
    return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
    // Removing item from the cart by filtering out the item with matching id
    return {
      ...state,
      cart: state.cart.filter((c) => c.id !== action.payload.id),
    };
    case "CHANGE_CART_QTY":
    // Changing the quantity of an item in the cart by finding the item with matching id and updating its quantity
    return {
      ...state,
      cart: state.cart.filter((c) =>
      c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      ),
    };
    default:
    return state;
  }
};

// Product Reducer - handles the state of the products
export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
    // Sorting the products based on price by updating the sort property in the state
    return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
    // Toggling the filter by stock option by updating the byStock property in the state
    return { ...state, byStock: !state.byStock };
    case "FILTER_BY_OFFER":
    // Toggling the filter by best offer option by updating the byBestOffer property in the state
    return { ...state, byBestOffer: !state.byBestOffer };
    case "FILTER_BY_RATING":
    // Filtering the products by rating by updating the byRating property in the state
    return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
    // Filtering the products by search query by updating the searchQuery property in the state
    return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
    // Clearing all the filters by resetting the filter properties in the state
    return { byStock: false, byBestOffer: false, byRating: 0 };
    default:
    return state;
  }
};
