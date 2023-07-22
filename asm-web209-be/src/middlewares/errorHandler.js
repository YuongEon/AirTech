export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err.error) {
    const errorMessages = err.error.details.map(
      (err) => err.message
    );
    return res.status(400).json({
      error: errorMessages,
    });
  }

  next();
};
