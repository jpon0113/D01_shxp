export function logger(req, res, next) {
  console.log(`logger fn middleware`);
  next();
}
