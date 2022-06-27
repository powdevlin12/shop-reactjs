import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPriceArray = action.payload.map((p) => p.price);
    const maxPriceProduct = Math.max(...maxPriceArray);
    const minPriceProduct = Math.min(...maxPriceArray);
    console.log(maxPriceProduct, minPriceProduct);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPriceProduct,
        min_price: minPriceProduct,
        price: maxPriceProduct,
      },
    };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products: products } = state;
    let tempProducts = [...products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      console.log("price-highest");
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        shipping: false,
        price: state.filters.max_price,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { text, company, category, color } = state.filters;

    let tempFilter = [...state.all_products];
    if (text) {
      tempFilter = tempFilter.filter((p) => {
         return p.name.toLowerCase().startsWith(text.toLowerCase());
      });
    }
    return { ...state,filtered_products : tempFilter};
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
