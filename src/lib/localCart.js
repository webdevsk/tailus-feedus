const CART_STORAGE_KEY = 'shopping-cart'

// Helper to check if we're in a server component
const isServer = () => {
  return typeof window === 'undefined'
}

// Helper to ensure we're on client side
const ensureClient = () => {
  if (isServer()) {
    throw new Error('This function cannot be called from a Server Component')
  }
}

// Helper to get current cart
const getStoredCart = () => {
  ensureClient()
  const cartData = localStorage.getItem(CART_STORAGE_KEY)
  return cartData ? JSON.parse(cartData) : []
}

// Helper to save cart
const saveCart = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
}

export function addToLocalCart({ idMeal, strMeal, strMealThumb, intQuantity = 1 }) {
  try {
    ensureClient()

    const cart = getStoredCart()
    const existingItemIndex = cart.findIndex(item => item.idMeal === idMeal)

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      cart[existingItemIndex].intQuantity += intQuantity
    } else {
      // Add new item if it doesn't exist
      cart.push({
        id: Date.now(), // Generate a unique id
        idMeal,
        strMeal,
        strMealThumb,
        intQuantity,
        floatPrice: (Math.random() * 1000 + 99).toFixed(2)
      })
    }

    saveCart(cart)
    return { status: "success" }
  } catch (error) {
    console.error('Error adding to cart:', error)
    return { status: "error", message: error.message }
  }
}

export function getLocalCart() {
  try {
    ensureClient()
    const cart = getStoredCart()
    return { status: "success", data: cart }
  } catch (error) {
    console.error('Error fetching cart:', error)
    return { status: "error", message: error.message }
  }
}

export function removeFromLocalCart(id) {
  try {
    ensureClient()
    const cart = getStoredCart()
    const updatedCart = cart.filter(item => item.id !== id)
    saveCart(updatedCart)
    return { status: "success" }
  } catch (error) {
    console.error('Error removing from cart:', error)
    return { status: "error", message: error.message }
  }
}

export function updateLocalCart({ id, intQuantity }) {
  try {
    ensureClient()
    const cart = getStoredCart()
    const itemIndex = cart.findIndex(item => item.id === id)

    if (itemIndex === -1) {
      throw new Error('Item not found in cart')
    }

    cart[itemIndex].intQuantity = intQuantity
    saveCart(cart)
    return { status: "success" }
  } catch (error) {
    console.error('Error updating cart:', error)
    return { status: "error", message: error.message }
  }
}

// Optional: Helper to clear the entire cart
export function clearLocalCart() {
  try {
    ensureClient()
    localStorage.removeItem(CART_STORAGE_KEY)
    return { status: "success" }
  } catch (error) {
    console.error('Error clearing cart:', error)
    return { status: "error", message: error.message }
  }
}

// Optional: Helper to sync local cart with server cart
export function syncLocalCartWithServer(serverCart) {
  try {
    ensureClient()
    saveCart(serverCart)
    return { status: "success" }
  } catch (error) {
    console.error('Error syncing cart:', error)
    return { status: "error", message: error.message }
  }
}