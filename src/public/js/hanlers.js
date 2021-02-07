import { createRuleElement } from "./dataInit/dataInit";
import { callApi } from "./helpers/apiHelper";

export const removeRule = async (id) => {
  const deleted = await callApi(`/api/rules/${id}`, 'DELETE');
}

export const appendRule = (newRule) => {
  const rulesList = document.getElementById('set-ups');
  rulesList.append(createRuleElement(newRule));
}

export const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const { parentNode: node } = event.target;
  const formData = new FormData();
  // node.getAttribute('id')
  formData.append('file', file);
  callApi(`/api/static/${node.getAttribute('id')}`, 'POST', formData);
}
