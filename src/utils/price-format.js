// This script handles the price formatting functionality.
// It provides consistent price display formatting with Czech locale and currency.
//
// Key functionality:
// 1. Handles different price input types (string or number)
// 2. Manages special price cases:
//    - Zero price becomes "Cena dle dohody"
//    - Negative price becomes "Prodáno"
//    - Invalid price shows error message
// 3. Formats valid prices with Czech locale
// 4. Adds 'Kč' currency suffix
//
// Parameters:
// - price: The price value (string or number)
//
// Returns a formatted price string suitable for display.


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