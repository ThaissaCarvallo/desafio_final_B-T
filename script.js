function sol() {
  document.getElementById('ceu').src = "imgs/lua.jpg";
  document.getElementById('ceu').alt = "uma lua";
  document.getElementById('ceu').onclick = "lua()";
}

function lua() {
  document.getElementById('ceu').src = "imgs/sol.jpg";
  document.getElementById('ceu').alt = "um sol";
  document.getElementById('ceu').onclick = "sol()";
}

function shareTrabalhos(titulo, texto, url){
  if (navigator.share) {
    navigator.share({
      title: titulo,
      text: texto,
      url: url,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
