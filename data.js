function data(req, res) {
  let x = req.params;

  let hasil = parseInt(x.parameter) * 10;
  console.log(hasil);

  res.status(200).json(hasil);
}
module.exports = data;
