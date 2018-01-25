export default (text = "Hello World Two") => {
    const element = document.createElement('div');

    element.innerHTML = text;
    return element;
};