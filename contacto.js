/* Monta a ligação de email só no navegador, para não ficar escrita às claras no HTML. */
(function(){
  var u = ['carloswallenstein', '100'].join(''), d = ['gmail', 'com'].join('.');
  document.querySelectorAll('a.mail').forEach(function(a){
    var addr = u + '@' + d, s = a.getAttribute('data-assunto');
    a.href = 'mailto:' + addr + (s ? '?subject=' + encodeURIComponent(s) : '');
    if (!a.hasAttribute('data-botao')) a.textContent = addr;
  });
})();
