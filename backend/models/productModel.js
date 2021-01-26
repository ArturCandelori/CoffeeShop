import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        name: {
          type: String,
          required: true,
        },
        cost: {
          type: Number,
          required: true,
          default: 0,
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
