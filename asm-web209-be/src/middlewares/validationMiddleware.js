export const validator = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      throw validationResult;
    }
    next();
  };
};
