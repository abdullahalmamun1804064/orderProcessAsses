const Product = require('../models/product');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  try {
    
    const { name, description, price, userId, quantities } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      quantities,
      user: userId 
    });
    console.log(req.body);
    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      product: savedProduct,
    });
  } catch (error) {
    return next(new ErrorHandler('Failed to create product', 500));
  }
});
