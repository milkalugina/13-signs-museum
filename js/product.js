document.getElementById('buy_icn_block').onclick = function() {
  document.querySelector('#buy_icn_block-svg').style.transform = "rotate(45deg)";
  document.querySelector('#buy_icn_block-svg circle').style.fill = "#669BA5";
  document.querySelector('.product_icn').style.transform = "rotate(45deg)";
  document.querySelector('.product_icn').style.filter = "drop-shadow(0px 0px 20px #FF7B7B)";
  document.querySelector('#text-buy').innerHTML = 'Вы купили товар'
}
