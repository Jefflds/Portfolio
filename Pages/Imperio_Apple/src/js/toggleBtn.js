var circle = document.querySelector('.circle');
var btn = document.querySelectorAll('.content span');
var img = document.getElementById('phone');

// Adiciona evento de clique a cada botão
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    var botaoID = this.id;
    trocarImagem(botaoID);
  });
}

// Função para trocar a imagem do telefone
function trocarImagem(botaoID) {
  var caminhoImagem = 'src/img/' + botaoID + '.png';
  img.src = caminhoImagem;
}

// Seleciona os spans de cor e adiciona evento de clique a cada um deles
var colors = document.querySelectorAll('.content span');
colors.forEach(function(color) {
  color.addEventListener('click', function() {
    var colorHex = getComputedStyle(this).backgroundColor;
    circle.style.backgroundColor = colorHex;
  });
});
 