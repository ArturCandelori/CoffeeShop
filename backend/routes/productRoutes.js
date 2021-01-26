import express from 'express';

import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getProducts).post(protect, createProduct);
router
  .route('/:id')
  .get(protect, getProductById)
  .delete(protect, deleteProduct)
  .put(protect, updateProduct);

export default router;
