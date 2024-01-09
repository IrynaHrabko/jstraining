document.querySelector('.btn').onclick = () => {
  toggleModal('Привіт 1')
  toggleModal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fuga recusandae rerum temporibus velit voluptatum?')
  toggleModal('Привіт 2')
}
function toggleModal(content) {
  let existedModals = document.querySelectorAll('dialog[open]')
  let offset = 0
  if (existedModals[0]) {
      offset = Array.from(existedModals).reduce(callback)
  }
  function callback() {
      // - your code - //
  }
  let modal = createModal(content, offset)
  document.querySelector('body').appendChild(modal)
}
function createModal(content, top = 0) {
  let modal = document.createElement('dialog')
  modal.innerText = content
  modal.classList.add('active')
  modal.style.translate = `${top} 0`;
  modal.setAttribute('open', '')
  return modal
}
