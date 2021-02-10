import { callApi } from '../helpers/apiHelper';
import { appendRule, removeRule, handleFileUpload } from '../hanlers';

export const initializeListeners = async () => {
  initModal();
  const deleteBtns = document.getElementsByClassName('delete');

  Array.from(deleteBtns).forEach(addDeleteListener);
};

async function submitForm(formComponent) {
  const { value: name } = formComponent.elements.name;
  const { value: type } = formComponent.elements.type;
  const { checked: email } = formComponent.elements.email;
  const { checked: url } = formComponent.elements.url;

  const newRuleData = { name, type, email, url };

  const newRule = await callApi('/api/rules', 'POST', new URLSearchParams(newRuleData), { 'Content-Type': 'application/x-www-form-urlencoded' });
  appendRule(newRule);
  formComponent.reset();
};

const initModal = () => {
  const modal = document.getElementById('modal');
  const openModal = document.getElementById('o-modal');
  const closeModal = document.getElementsByClassName('close')[0];
  const submitButton = document.getElementById('send');
  const formComponent = document.getElementById('create-handler');

  openModal.addEventListener('click', () => modal.style.display = 'block');
  closeModal.addEventListener('click', () => modal.style.display = 'none');

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  submitButton.addEventListener('click', () => {
    submitForm(formComponent);
    modal.style.display = 'none';
  });
};

export const addDeleteListener = (element) => {
  element.addEventListener('click', async (event) => {
    const { parentNode: node } = event.target;
    await removeRule(node.getAttribute('id'));
    node.remove();
  });
};

export const addSubmitListener = (element) => {
  element.addEventListener('change', event => {
    handleFileUpload(event);
  });
}