const component = () => {
  const element = document.createElement('h1');

  element.innerHTML = 'Yo!';

  return element;
}

document.body.appendChild(component());
