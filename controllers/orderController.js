const Order = require('../models/order');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId, productIds, quantities, paymentInfo } = req.body;

    if (!userId || !productIds || !quantities || !paymentInfo) {
      return next(new ErrorHandler('Invalid data. Order must contain userId, productIds, quantities, and paymentInfo', 400));
    }

    const newOrder = new Order({
      userId,
      productIds,
      quantities,
      paymentInfo
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      order: savedOrder
    });
  } catch (error) {
    return next(new ErrorHandler('Failed to create order', 500));
  }
});

exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      orders
    });
  } catch (error) {
    return next(new ErrorHandler('Failed to retrieve orders', 500));
  }
});

exports.getOrderById = catchAsyncErrors(async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
      return next(new ErrorHandler('Order not found', 404));
    }
    res.status(200).json({
      success: true,
      order
    });
  } catch (error) {
    return next(new ErrorHandler('Failed to retrieve order', 500));
  }
});

exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const updates = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, { new: true });
    if (!updatedOrder) {
      return next(new ErrorHandler('Order not found', 404));
    }
    res.status(200).json({
      success: true,
      order: updatedOrder
    });
  } catch (error) {
    return next(new ErrorHandler('Failed to update order', 500));
  }
});

exports.partiallyUpdateOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const updates = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, { new: true });
    if (!updatedOrder) {
      return next(new ErrorHandler('Order not found', 404));
    }
    res.status(200).json({
      success: true,
      order: updatedOrder
    });
  } catch (error) {
    return next(new ErrorHandler('Failed to partially update order', 500));
  }
});

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return next(new ErrorHandler('Order not found', 404));
    }
    res.status(204).json({
      success: true
    });
  } catch (error) {
    return next(new ErrorHandler('Failed to delete order', 500));
  }
});
