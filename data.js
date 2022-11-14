function data(req, res) {
  let x = req.params;

  let arimatika = x.arimatika;
  let number = parseInt(x.number);
  let y = 10;
  let hasil = 0;

  if (arimatika === "tambah") {
    hasil = number + y;
  } else if (arimatika === "kurang") {
    hasil = number - y;
  } else if (arimatika === "kali") {
    hasil = number * y;
  } else if (arimatika === "bagi") {
    hasil = number / y;
  } else {
    console.log("Error");
  }

  console.log(hasil);

  res.status(200).json(hasil);
}

module.exports = data;
