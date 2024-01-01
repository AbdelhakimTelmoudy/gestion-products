const initialState = [
    { id: "11", title: "Perfume Oil", price: "13", stock: "65" },
    { id: "12", title: "Brown Perfume", price: "40", stock: "52" },
    { id: "13", title: "Fog Scent Xpressio Perfume", price: "13", stock: "61" },
    { id: "12", title: "Brown Perfume", price: "40", stock: "52" },
    { id: "13", title: "Fog Scent Xpressio Perfume", price: "13", stock: "61" },
    { id: "12", title: "Brown Perfume", price: "40", stock: "52" },
    { id: "13", title: "Fog Scent Xpressio Perfume", price: "13", stock: "61" },
    { id: "12", title: "Brown Perfume", price: "40", stock: "52" },
    
  ];
  
  
  const productreducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return state;
      case "ADD_PRODUCTS":
        return (state = [...state, action.payload]);
      case "EDITE_PRODUCTS":
        return state.filter((p) => p.id === action.payload.id);
      case "DELETE_PRODUCTS":
        return (state = state.filter((p) => p.id !== action.payload.id));
      default:
        return state;
    }
  };
  
  
  export default productreducer;

  