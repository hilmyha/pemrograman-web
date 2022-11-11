// function
function pertambahan(angka1, angka2) {
  return angka1 + angka2
}
function pengurangan(angka1, angka2) {
  return angka1 - angka2
}
function perkalian(angka1, angka2) {
  return angka1 * angka2
}

document.write('<p> hasil tambah : '+ pertambahan(10,14) +'</p>')
document.write('<p> hasil pengurangan : '+ pengurangan(20,200) +'</p>')
document.write('<p> hasil perkalian : '+ perkalian(20,2) +'</p>')

// function expression
var hasilKali = function(angka1, angka2) {
  return angka1 * angka2
}

document.write('<p> hasil perkalian : '+ hasilKali(200,30) +'</p>')