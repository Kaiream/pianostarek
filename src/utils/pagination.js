// This script handles the pagination range calculation functionality.
// It generates a smart page range for navigation that includes ellipsis for large ranges.
//
// Returns an array containing page numbers and ellipsis strings
// that create an intuitive pagination navigation interface.

export function getPageRange(current, total) {
  if (total <= 3) return Array.from({ length: total }, (_, i) => i + 1);
  
  const pages = [];
  
  // Always show first page
  pages.push(1);
  
  if (current <= 2) {
    // Near the start
    pages.push(2, 3);
    pages.push("...");
    pages.push(total);
  } else if (current >= total - 1) {
    // Near the end
    pages.push("...");
    pages.push(total - 2, total - 1, total);
  } else {
    // In the middle
    pages.push("...");
    pages.push(current - 1, current, current + 1);
    pages.push("...");
    pages.push(total);
  }
  
  return pages;
}