const component = () => {
  const element = document.createElement('h1');

  element.classList.add("main-heading");

  element.innerHTML = 'Yo!';

  return element;
}

document.body.appendChild(component());
