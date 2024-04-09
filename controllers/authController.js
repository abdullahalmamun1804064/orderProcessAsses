const User = require('../models/user');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const ErrorHandler = require('../utils/errorHandler');

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }
    var user = await User.create({
        name,
        email,
        password,
    })
    sendToken(user, 200, res);

})



exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res)
})


exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})