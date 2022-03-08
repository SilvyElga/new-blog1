const emailReceiver ='angkatan1@gmail.com'

function dataSubmit() {
  let nama = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let telepon = document.getElementById('input-phone').value;
  let subject = document.getElementById('input-subject').value;
  let pesan = document.getElementById('input-massage').value;


  if (nama == '') {
      alert('isi nama kamu')
  }
  if (email == '') {
    alert('isi email kamu')
}
if (telepon == '') {
    alert('isi nomor telepon kamu')
}
if (subject == '') {
    alert('isi subject kamu')
}
if (pesan == '') {
    alert('isi pesan kamu')
}
console.log(nama);
  console.log(email);
  console.log(telepon);
  console.log(subject);
  console.log(pesan);

  document.getElementById('input-name').value=''
  document.getElementById('input-email').value=''
  document.getElementById('input-phone').value=''
  document.getElementById('input-subject').value=''
  document.getElementById('input-massage').value=''

//   const emailReceiver = 'angkatan1@gmail.com'

 let a = document.createElement('a')
 a.href=`mailto:${emailReceiver}?subject=${subject}&body=hello my name ${nama},${pesan},${telepon}` 
 a.click()


}
