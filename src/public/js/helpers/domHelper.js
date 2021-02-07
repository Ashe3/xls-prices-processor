export const createElement = ({tagName, className, attrs = {}}) => {
  const element = document.createElement(tagName);
  if (className) {
    const classNames = className.split(' ').filter(Boolean);
    element.classList.add(...classNames);
  }
  Object.keys(attrs).forEach(key => element.setAttribute(key, attrs[key]));
  return element;
}