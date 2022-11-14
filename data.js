function data(req, res) {
  let x = req.params;

  res.send(x * 10);
}
module.exports = data;
