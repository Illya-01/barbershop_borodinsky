const map = document.querySelector('.modal-map')
const button = document.querySelector('.contacts-button-map')
const link = document.querySelector('.find-us')
const close = document.querySelector('.modal-map .modal-close')

button.addEventListener('click', function (evt) {
   evt.preventDefault()
   map.classList.add('modal-show')
})

link.addEventListener('click', function (evt) {
   evt.preventDefault()
   map.classList.add('modal-show')
})

close.addEventListener('click', function (evt) {
   evt.preventDefault()
   map.classList.remove('modal-show')
})

window.addEventListener('keydown', function (evt) {
   if (evt.keyCode === 27) {
      if (map.classList.contains('modal-show')) {
         evt.preventDefault()
         map.classList.remove('modal-show')
      }
   }
})
