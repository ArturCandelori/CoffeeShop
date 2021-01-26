function generateProductList() {
  const product = {
    name: 'Test Product',
    price: 5,
    image: 'https://picsum.photos/500/300',
    ingredients: [
      {
        id: 1,
        name: 'test ingredient',
        cost: 0.5,
        quantity: 1,
      },
    ],
  };

  const productList = [];

  for (let i = 1; i <= 30; i++) {
    productList.push({ ...product });
  }

  return productList;
}

const products = generateProductList();

export default products;
