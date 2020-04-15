// const catchAsync = fn => {//add module.exports and catchAsync no need
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
