const createElement = ({tagName, className, attrs = {}}) => {
  const element = document.createElement(tagName);
  if (className) {
    const classNames = className.split(' ').filter(Boolean);
    element.classList.add(...classNames);
  }

  Object.keys(attrs).forEach(key => element.setAttribute(key, attrs[key]));
  return element;
}

const loadLocal = () => {

}

const uploadLocal = () => {

}

const app = () => {
  const modal = document.getElementById('modal');
  const openModal = document.getElementById('o-modal');
  const closeModal = document.getElementsByClassName('close')[0];

  openModal.addEventListener('click', () => modal.style.display = 'block');
  closeModal.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  })
}

app();