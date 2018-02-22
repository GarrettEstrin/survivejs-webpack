import styles from './main.scss';

export default (text = 'Hello World Two') => {
  const element = document.createElement('div');

  element.innerHTML = text;
  element.className = styles.redButton;
  return element;
};

