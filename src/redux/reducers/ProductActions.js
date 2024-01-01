export const getAllProducts = () => {
    return {
      type: "GET_PRODUCTS",
    };
  };
  export const AddProduct = (product) => {
    return {
      type: "ADD_PRODUCTS",
      payload: product,
    };
  };
  export const DeleteProduct = (product) => {
    return {
      type: "DELETE_PRODUCTS",
      payload: product,
    };
  };
  export const EditeProduct = (product) => {
    return {
      type: "EDITE_PRODUCTS",
      payload: product,
    };
  };