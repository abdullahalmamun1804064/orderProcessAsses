// const User = require('../models/user');
// const Comment = require('../models/comment'); 
// const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
// const ErrorHandler = require('../utils/errorHandler');

// // Create a new comment for a blog post
// exports.createComment = catchAsyncErrors(async (req, res, next) => {
//   try {
  
//     const { comment, userId, blogId } = req.body;

    
 
//   const user = await User.findById(userId);
//   const blog = await Blog.findById(blogId)
 

//     if (!blog) {
//       return next(new ErrorHandler('Blog not found', 404));
//     }
//     if (!user) {
//       return next(new ErrorHandler('User not found', 404));
//     }

//     const newComment = new Comment({
//       comment,
//       author: userId, 
//       blog: blogId,
//     });

//     const savedComment = await newComment.save();

//     res.status(201).json({
//       success: true,
//       comment: savedComment,
//     });
//   } catch (error) {
//     return next(new ErrorHandler('Failed to create comment', 500));
//   }
// });


// exports.getCommentsForBlog = catchAsyncErrors(async (req, res, next) => {
//   try {
//     const blogId = req.params.id; 
    
//     const comments = await Comment.find({ blog: blogId })
//       .populate({
//         path: 'author',
//         select: 'name avatar role',
//       })
//       .sort({ date: -1 });
//     const totalComments = comments.length;
//     res.status(200).json({
//       success: true,
//       totalComments,
//       comments,
     
//     });
//   } catch (error) {
//     return next(new ErrorHandler('Failed to retrieve comments', 500));
//   }
// });



// exports.updateComment = catchAsyncErrors(async (req, res, next) => {
//   try {
//     const { commentId, comment, userId } = req.body;

//     const blogComment = await Comment.findById(commentId);

//     if (!blogComment) {
//       return next(new ErrorHandler('Comment not found', 404));
//     }

//     if (blogComment.author.toString() !== userId) {
//       return next(new ErrorHandler('Unauthorized: You cannot update this comment', 403));
//     }

//     blogComment.comment = comment;
//     await blogComment.save();

//     res.status(200).json({
//       success: true,
//       message: 'Comment updated successfully',
//       blogComment,
//     });
//   } catch (error) {
//     return next(new ErrorHandler('Failed to update comment', 500));
//   }
// });




// exports.deleteComment = catchAsyncErrors(async (req, res, next) => {
  
//   try {
//     const { userId, commentId } = req.body;
//     const comment = await Comment.findById(commentId);
//     if (!comment) {
//       return next(new ErrorHandler('Comment not found', 404));
//     }

//     if (comment.author.toString() !== userId) {
//       return next(new ErrorHandler('Unauthorized: You cannot delete this comment', 403));
//     }

//     await Comment.deleteOne({ _id: commentId })
//     res.status(200).json({
//       success: true,
//       message: 'Comment deleted successfully',
//     });
//   } catch (error) {
//     return next(new ErrorHandler('Failed to delete comment', 500));
//   }
// });
