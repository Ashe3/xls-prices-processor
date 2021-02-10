import { callApi } from "../helpers/apiHelper";
import { createElement } from '../helpers/domHelper';
import { addDeleteListener, addSubmitListener } from "../listeners/initialize";

const loadLocal = () => {
  const c = createElement({ tagName: 'div', className: '' });
}

const uploadLocal = () => {

}

export const initData = async () => {
  const rulesList = document.getElementById('rules-box');

  const rules = await callApi('/api/rules', 'GET');
  const rulesElementList = rules.map(createRuleElement);

  rulesList.append(...rulesElementList);
};

export const createRuleElement = ({ name, type, email, url, id }) => {
  const element = createElement({ tagName: 'div', className: 'rule', attrs: { id } });

  const ruleName = createElement({ tagName: 'span', className: 'name' });
  ruleName.innerText = name;

  const ruleKey = createElement({ tagName: 'span', className: 'key' });
  ruleKey.innerText = type;

  const loadBtn = createElement({ tagName: 'div', className: 'btn' });
  const inputFile = createElement({tagName: 'input', attrs: {type: 'file', id: 'upload-file'}});
  const inputLabel = createElement({tagName: 'label', attrs: {for: 'upload-file'}});
  inputLabel.innerText = 'load';
  loadBtn.append(inputFile, inputLabel);
  addSubmitListener(loadBtn);

  const setBtn = createElement({ tagName: 'div', className: 'btn' });
  setBtn.innerText = 'settings';

  const sendBtn = createElement({ tagName: 'div', className: `btn ${url === 'true' || email === 'true' ? '' : 'non-active'}` });
  sendBtn.innerText = 'send';

  const downloadBtn = createElement({ tagName: 'div', className: 'btn non-active' });
  downloadBtn.innerText = 'download';

  const deleteButton = createElement({ tagName: 'div', className: 'btn delete' });
  deleteButton.innerText = 'delete';
  addDeleteListener(deleteButton);

  element.append(ruleName, ruleKey, loadBtn, setBtn, sendBtn, downloadBtn, deleteButton);
  return element;
};