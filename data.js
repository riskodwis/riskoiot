function data(req, res) {
  let x = req.params;
  res.send(x);
}
module.exports = data;
