// This script handles the price formatting functionality.
// It provides consistent price display formatting with Czech locale and currency.

export function formatPrice(price) {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  
  // Handle special price cases
  if (numericPrice === 0) {
    return "Cena dle dohody";
  }
  else if (numericPrice < 0) {
    return "Prodáno";
  }
  else if (isNaN(numericPrice)) {
    return "Chyba při načítání ceny";
  }

  // Format the price
  return new Intl.NumberFormat("cs-CZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice) + " Kč";
}