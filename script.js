let visivel1 = false;
let visivel2 = false;

function mostrarMensagem1() {
  const msg = document.getElementById("mensagem");
  if (visivel1) {
    msg.innerHTML = "";
  } else {
    msg.innerHTML = '<a href="https://www.instagram.com/gabriel_nobre.of" target="_blank">Instagram de Gabriel</a>';
  }
  visivel1 = !visivel1;
}

function mostrarMensagem2() {
  const msg = document.getElementById("mensagem1");
  if (visivel2) {
    msg.innerHTML = "";
  } else {
    msg.innerHTML = '<a href="https://www.tiktok.com/@gabriel_nobres" target="_blank">TikTok de Gabriel</a>';
  }
  visivel2 = !visivel2;
}
