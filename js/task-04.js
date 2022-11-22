const refs = {
  valueEl: document.querySelector('#value'),
  incrementButtonEl: document.querySelector('[data-action="increment"]'),
  decrementButtonEl: document.querySelector('[data-action="decrement"]'),
};
// const clickFunction =   {
//     value: 0,
//     incMetod() {
//         this.value += 1;
//         return refs.valueEl.textContent = this.value
//     },
//     decMetod() {
//         this.value -= 1;
//         return refs.valueEl.textContent = this.value
//     },
// }

// refs.incrementButtonEl.addEventListener('click', clickFunction.incMetod.bind(clickFunction));
// refs.decrementButtonEl.addEventListener('click', clickFunction.decMetod.bind(clickFunction));

let value = 0;
function incrementValue() {
  value += 1;
  refs.valueEl.textContent = value;
}
function decrementValue() {
  value -= 1;
  refs.valueEl.textContent = value;
}
refs.incrementButtonEl.addEventListener('click', incrementValue);
refs.decrementButtonEl.addEventListener('click', decrementValue);

// refs.incrementButtonEl.addEventListener('click', () => {
//   value += 1;
//   refs.valueEl.textContent = value;
// });
// refs.decrementButtonEl.addEventListener('click', () => {
//   value -= 1;
//   refs.valueEl.textContent = value;
// });

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
