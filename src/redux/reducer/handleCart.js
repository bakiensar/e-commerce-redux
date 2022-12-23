const cart = []

export const handleCart = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case 'ADDITEM':
      //check if product is already exist
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        //increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x,
        )
      } else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }

    case 'DELITEM':
      const exist1 = state.find((x) => x.id === product.id)
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== product.id)
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x,
        )
      }
    case 'CLOSEITEM':
      const exist2 = state.filter((x) => x.id !== product.id)

      return exist2

    default:
      return state
  }
}
