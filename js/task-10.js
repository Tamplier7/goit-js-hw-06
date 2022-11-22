function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesWrap: document.querySelector('#boxes'),
  input: document.querySelector('[type = number]'),
};

let numberOfBoxes = 0;

const boxesCounter = event => {
  if (event.currentTarget.value < 0) {
    numberOfBoxes = 0;

    alert('Введіть чило від 1 до 100');
    event.currentTarget.value = '';

    return;
  } else if (event.currentTarget.value > 100) {
    numberOfBoxes = 0;

    alert('Введіть чило від 1 до 100');
    event.currentTarget.value = '';

    return;
  }
  numberOfBoxes = event.currentTarget.value;
  console.log(numberOfBoxes);
};

refs.input.addEventListener('input', boxesCounter);

const onClickCreate = () => {
  let boxesMarkup = '';
  let size = 30;
  for (let i = 1; i <= numberOfBoxes; i += 1) {
    size += 10;
    boxesMarkup += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height:${size}px; margin-top: 10px;"></div>`;
  }

  refs.boxesWrap.insertAdjacentHTML('beforeend', boxesMarkup);
};

const onClickDestroy = () => {
  refs.boxesWrap.innerHTML = '';
  refs.input.value = '';
};

refs.createBtn.addEventListener('click', onClickCreate);
refs.destroyBtn.addEventListener('click', onClickDestroy);
