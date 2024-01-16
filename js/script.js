function calculateLuas() {
  //Mengambil nilai panjang sisi dari input
  var luasSquareSide = document.getElementById("luasSquareSide").value;

  // Menghitung luas persegi
  var area = luasSquareSide * luasSquareSide;

  // Menampilkan hasil di elemen dengan id 'luasResult'
  document.getElementById("luasResult").innerText = "Luas Persegi: " + area;
}

function calculateKeliling() {
  //Mengambil nilai panjang sisi dari input
  var kelilingSquareSide = document.getElementById("kelilingSquareSide").value;

  // Menghitung Keliling persegi
  var area = 4 * kelilingSquareSide;

  // Menampilkan hasil di elemen dengan id 'kelilingResult'
  document.getElementById("kelilingResult").innerText =
    "Keliling Persegi: " + area;
}

//Tombol Reset Luas Persegi
function resetLuasCalculator() {
  // Mengatur nilai input dan hasil menjadi kosong
  document.getElementById("luasSquareSide").value = "";
  document.getElementById("luasResult").innerText = "Luas Persegi: ";
}

//Tombol Reset Keliling Persegi
function resetKelilingCalculator() {
  // Mengatur nilai input dan hasil menjadi kosong
  document.getElementById("kelilingSquareSide").value = "";
  document.getElementById("kelilingResult").innerText = "Keliling Persegi: ";
}
