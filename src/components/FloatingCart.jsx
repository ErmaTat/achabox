import { useState } from 'react'
import {
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import useCart from '../hooks/useCart'
import { createWhatsAppOrderUrl, formatNaira } from '../utils/whatsappOrder'

export default function FloatingCart() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, itemCount, total, updateQuantity, removeItem } = useCart()

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <section
          id="floating-cart-panel"
          role="dialog"
          aria-label="Shopping cart"
          className="flex max-h-[70vh] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-[#F0EBE3] bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[#F0EBE3] px-5 py-4">
            <div>
              <h2 className="text-lg font-bold text-[#3D2418]">Your bag</h2>
              <p className="text-xs text-[#7A736C]">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close shopping cart"
              className="rounded-full p-2 text-[#7A736C] transition hover:bg-[#FFF8F1] hover:text-[#3D2418]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <ShoppingBagIcon className="mx-auto mb-3 h-8 w-8 text-[#C9965A]" />
              <p className="font-semibold text-[#3D2418]">Your cart is empty</p>
              <a
                href="#shop"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex rounded-lg bg-[#FFF1E5] px-4 py-2 text-sm font-semibold text-[#C64E0A] transition hover:bg-[#FFE4CF]"
              >
                Explore the shop
              </a>
            </div>
          ) : (
            <>
              <div className="max-h-[40vh] space-y-3 overflow-y-auto px-5 py-4">
                {items.map(item => (
                  <article
                    key={item.id}
                    className="rounded-xl border border-[#F0EBE3] p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-[#3D2418]">{item.name}</h3>
                        <p className="mt-0.5 text-xs text-[#7A736C]">
                          {item.size} · {formatNaira(item.price)} each
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} ${item.size}`}
                        className="rounded-md p-1.5 text-[#9A8E83] transition hover:bg-red-50 hover:text-red-600"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease ${item.name} ${item.size} quantity`}
                          className="rounded-md border border-[#E8E0D5] p-1.5 text-[#4A2A1A] transition hover:bg-[#FFF8F1]"
                        >
                          <MinusIcon className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-5 text-center text-sm font-semibold text-[#3D2418]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase ${item.name} ${item.size} quantity`}
                          className="rounded-md border border-[#E8E0D5] p-1.5 text-[#4A2A1A] transition hover:bg-[#FFF8F1]"
                        >
                          <PlusIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-[#3D2418]">
                        {formatNaira(item.price * item.quantity)}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="border-t border-[#F0EBE3] px-5 py-4">
                <div className="mb-1 flex items-center justify-between text-base font-bold text-[#3D2418]">
                  <span>Total</span>
                  <span>{formatNaira(total)}</span>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-[#7A736C]">
                  Delivery details will be confirmed on WhatsApp. Tap Send there to place your order.
                </p>
                <a
                  href={createWhatsAppOrderUrl(items)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1DA851]"
                >
                  Checkout on WhatsApp
                </a>
              </div>
            </>
          )}
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        aria-controls="floating-cart-panel"
        aria-label={isOpen ? 'Close shopping cart' : `Open shopping cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
        className="inline-flex min-h-14 items-center gap-2 rounded-full bg-[#F97316] px-5 text-white shadow-lg shadow-[#3D2418]/20 transition hover:-translate-y-0.5 hover:bg-[#EA580C] active:translate-y-0"
      >
        {isOpen ? <XMarkIcon className="h-5 w-5" /> : <ShoppingBagIcon className="h-5 w-5" />}
        <span className="text-sm font-bold">Cart</span>
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-[#C64E0A]">
          {itemCount}
        </span>
      </button>
    </div>
  )
}
