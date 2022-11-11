// tipe data integer / number
let jumlah = 1234567890

console.log('tipe data int / number')
console.log('jumlah : ' + jumlah)

// tipe data string
let alamat = 'Gg Sadar'
let namaLengkap = 'Zaky Farras'

console.log('mahasiswa bernama ' + namaLengkap + ' beralamat di ' + alamat + ' dengan data bertipe "' + typeof namaLengkap + '"')

// tipe data boolean
let hadir = true
let jawaban = false

console.log('apakah hadir : ' + hadir + ', nilai hadir : ' + jawaban)

// cek tipe data
console.log(typeof jumlah)
console.log(typeof alamat)
console.log(typeof hadir)

// array
let anggota = [
  'kopri',
  'susilo',
  'zaky',
  'usman',
]

document.write('<p>' + anggota + '</p>')
console.log(anggota)

// object
let mahasiswa = {
  'id': 1,
  'nama': 'susilo firmansyah',
  'nim': 12345,
  'email': 'susi@susi.com',
  'alamat': 'pemalang',

}

document.write('<p> <b>nama</b> : ' + mahasiswa['nama'] + '</p>')
document.write('<p> <b>nim</b> : ' + mahasiswa['nim'] + '</p>')
console.log(mahasiswa)

