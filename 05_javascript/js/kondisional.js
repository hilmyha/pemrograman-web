// if
let datang = true

if (datang == true) {
  document.write('<p> hadir : '+ datang +'</p>')
}

// if else
let pergi = false
if (pergi == false) {
  document.write('<p> hadir </p>')
} else {
  document.write('<p> tidak hadir </p>')
}

// if else if
let nama_depan = 'ahmad'
let nama_belakang = 'haidar'

if (nama_depan == 'ahmad' && nama_belakang == 'haidar') {
  document.write('<p> dia adalah artis </p>')
} else if (nama_depan == 'ahmad' || nama_belakang == 'haidar') {
  document.write('<p> dia bukan artis </p>')
} else {
  document.write('<p> dia bukan siapa - siapa </p>')
}

