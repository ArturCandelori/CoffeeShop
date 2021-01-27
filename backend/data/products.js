function generateProductList() {
  const productList = [
    {
      name: 'Espresso',
      image:
        'https://i0.wp.com/www.thecoffeecompass.com/wp-content/uploads/img_0953.jpg?fit=1776%2C1184&ssl=1',
      price: '0',
      ingredients: [
        {
          name: 'café',
          quantity: 18,
          cost: 0.5,
        },
        {
          name: 'água',
          quantity: 30,
          cost: 0.1,
        },
      ],
    },
    {
      name: 'Americano',
      image:
        'https://image.freepik.com/free-photo/cup-hot-americano-coffee-hot-espresso-coffee-wooden-table_41386-402.jpg',
      price: '0',
      ingredients: [
        {
          name: 'café',
          quantity: 18,
          cost: 0.5,
        },
        {
          name: 'água',
          quantity: 0,
          cost: 0,
        },
      ],
    },
    {
      name: 'Cappuccino',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg',
      price: '0',
      ingredients: [
        {
          name: 'café',
          quantity: 18,
          cost: 0.5,
        },
        {
          name: 'água',
          quantity: 0,
          cost: 0,
        },
        {
          name: 'leite',
          quatity: 0,
          cost: 0,
        },
      ],
    },
    {
      name: 'Mocha',
      image: 'https://cdn.pastemagazine.com/www/articles/mocha_coffee_main.jpg',
      price: '0',
      ingredients: [
        {
          name: 'café',
          quantity: 18,
          cost: 0.5,
        },
        {
          name: 'água',
          quantity: 0,
          cost: 0,
        },
        {
          name: 'leite',
          quantity: 0,
          cost: 0,
        },
        {
          name: 'chocolate',
          quatity: 0,
          cost: 0,
        },
      ],
    },
    {
      name: 'Espresso Tônica',
      image:
        'https://www.sagecz.cz/Sage/files/a1/a19401ac-962c-41f7-9849-90e63c68586b.jpg',
      price: '0',
      ingredients: [
        {
          name: 'café',
          quantity: 18,
          price: 0.5,
        },
        {
          name: 'água',
          quantity: 30,
          price: 0.1,
        },
        {
          name: 'tônica',
          quatity: 0,
          price: 0,
        },
        {
          name: 'gelo',
          quantity: 0,
          price: 0,
        },
      ],
    },
  ];

  const product = {
    price: 5,
    image: 'https://picsum.photos/500/300',
    ingredients: [
      {
        name: 'test ingredient',
        cost: 0.5,
        quantity: 1,
      },
    ],
  };

  for (let i = 1; i <= 20; i++) {
    productList.push({ ...product, name: `Test Product ${i}` });
  }

  return productList;
}

const products = generateProductList();

export default products;
