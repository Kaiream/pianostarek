export function catConcat(product) {
  return [
    product.constructionType, 
    product.condition, 
    product.brand, 
    product.finish
  ].filter(Boolean);
}