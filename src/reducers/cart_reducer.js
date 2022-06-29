import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    console.log(id + color)
    let tempItem = state.cart.find((i) => i.id === id + color)
    if (tempItem) {
      // let newAmount = tempItem.amount + amount;
      // if (newAmount > tempItem.max) newAmount = tempItem.max;
      // const tempItemAfter = { ...tempItem, amount: newAmount }

      // return { ...state, cart: [...state.cart, tempItemAfter] }
      // nếu đã tồn tại sản phẩm này trong giỏ rồi ( trùng màu vs trùng id là đã tồn tại)
      let tempCart = state.cart.map((cartItem) => {

        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) newAmount = cartItem.max;
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem;
        }
      })
      return {...state,cart : tempCart}
    } else {
      // tạo ra một item trong cart với id = id + color
      const newItem = {
        id: id + color,
        color,
        name: product.name,
        amount,
        max: product.stock,
        price: product.price,
        image: product.images[0].url
      }
      console.log(newItem)
      return { ...state, cart: [...state.cart, newItem] }

    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
