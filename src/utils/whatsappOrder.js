const WHATSAPP_PHONE = '2348113579865'

export function formatNaira(amount) {
  return `₦${amount.toLocaleString('en-NG')}`
}

export function createWhatsAppOrderUrl(items) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const orderLines = items.map(item =>
    `${item.quantity} x ${item.name} (${item.size}) — ${formatNaira(item.price * item.quantity)}`,
  )
  const message = [
    'Hello AchaBox, I would like to place an order:',
    '',
    ...orderLines,
    '',
    `Order total: ${formatNaira(total)}`,
    'Please confirm my order and share delivery details.',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
