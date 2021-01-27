import dotenv from 'dotenv';

import products from './data/products.js';
import users from './data/users.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const sampleProducts = products.map(product => {
      return {
        ...product,
      };
    });

    const sampleUsers = users.map(user => {
      return {
        ...user,
      };
    });

    await Product.insertMany(sampleProducts);

    await User.insertMany(sampleUsers);

    console.log('Data imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
