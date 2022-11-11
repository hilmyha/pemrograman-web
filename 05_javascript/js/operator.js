// aritmatika
let nomor1 = 10000
let nomor2 = 30000

let tambah = nomor1 + nomor2
let kurang = nomor1 - nomor2
let kali = nomor1 * nomor2
let bagi = nomor1 / nomor2

document.write('<p> hasil dari ' + nomor1 + ' + ' + nomor2 + ' = ' + tambah + '</p>')
document.write('<p> hasil dari ' + nomor1 + ' - ' + nomor2 + ' = ' + kurang + '</p>')
document.write('<p> hasil dari ' + nomor1 + ' * ' + nomor2 + ' = ' + kali + '</p>')
document.write('<p> hasil dari ' + nomor1 + ' / ' + nomor2 + ' = ' + bagi + '</p>')

// comparison
let perbandingan = nomor1 > nomor2

document.write('<p> hasil dari ' + nomor1 + ' > ' + nomor2 + ' = ' + perbandingan + '</p>')

// Logic
let lulus = true
let terbaik = false

let and = lulus && terbaik
let or = lulus || terbaik


document.write('<p> and dari ' + lulus + ' && ' + terbaik + ' = ' + and + '</p>')
document.write('<p> or dari ' + lulus + ' || ' + terbaik + ' = ' + or + '</p>')
document.write('<p> apakah dia lulus? ' + !lulus + '</p>')