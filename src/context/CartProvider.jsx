import { useState } from 'react'
import CartContext from './cartContext'

export default function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(item) {
    setItems(currentItems => {
      const existingItem = currentItems.find(currentItem => currentItem.id === item.id)

      if (existingItem) {
        return currentItems.map(currentItem =>
          currentItem.id === item.id
            ? { ...currentItem, quantity: currentItem.quantity + 1 }
            : currentItem,
        )
      }

      return [...currentItems, { ...item, quantity: 1 }]
    })
  }

  function updateQuantity(id, quantity) {
    setItems(currentItems => {
      if (quantity <= 0) {
        return currentItems.filter(item => item.id !== id)
      }

      return currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item,
      )
    })
  }

  function removeItem(id) {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  const itemCount = items.reduce((count, item) => count + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, itemCount, total, addItem, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
