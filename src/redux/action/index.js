//For Add Item Cart
export const addCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  }
}

//For Del Item

export const delCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  }
}

export const closeCart = (product) => {
  return {
    type: 'CLOSEITEM',
    payload: product,
  }
}
