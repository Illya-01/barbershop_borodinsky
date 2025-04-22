const link = document.querySelector('.login-link')
const popup = document.querySelector('.modal-login')
const close = document.querySelector('.modal-login .modal-close')
const form = popup.querySelector('.login-form')
const login = popup.querySelector('[name=login]')
const password = popup.querySelector('input[name=password]')
const storage = localStorage.getItem('login')
const isStorageSupport = true

link.addEventListener('click', function (evt) {
   evt.preventDefault()
   popup.classList.add('modal-show')
   login.focus()

   if (storage) {
      login.value = storage
      password.focus()
   } else {
      login.focus()
   }
})

close.addEventListener('click', function (evt) {
   evt.preventDefault()
   popup.classList.remove('modal-show')
   popup.classList.remove('modal-error')
})

form.addEventListener('submit', function (evt) {
   console.log('Send the form')
   if (!login.value || !password.value) {
      evt.preventDefault()
      console.log('Нужно ввести логин и пароль')
      popup.classList.remove('modal-error')
      popup.offsetWidth = popup.offsetWidth
      popup.classList.add('modal-error')
   } else {
      if (isStorageSupport) localStorage.setItem('login', login.value)
   }
})

window.addEventListener('keydown', function (evt) {
   if (evt.keyCode === 27) {
      if (popup.classList.contains('modal-show')) {
         evt.preventDefault()
         popup.classList.remove('modal-show')
         popup.classList.remove('modal-error')
      }
   }
})
