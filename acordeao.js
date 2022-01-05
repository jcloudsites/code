(function () {
  'use strict'

  var $acordeao = document.querySelector('.acordeao')

  $acordeao.addEventListener('click', function(event) {
    var $this = this
    var $origin = event.target

    if($origin.classList.contains('acordeao-item-titulo')) {
      document.querySelector('.acordeao-item_isActive').classList.remove('acordeao-item_isActive')
      $origin.parentNode.classList.add('acordeao-item_isActive')
    }
  })
})()