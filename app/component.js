//import styles from './main.scss';

export default (text = 'Hello World') => {
  const element = document.createElement('div');

  element.innerHTML = text;
  element.className = 'pure-button';
  return element;
};

