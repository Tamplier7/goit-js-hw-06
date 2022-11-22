const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// input.addEventListener(`input`, event => {
//   output.textContent = event.currentTarget.value;
//   if (event.currentTarget.value === ``) {
//     output.textContent = 'Anonymous';
//   }
//   console.log(output.textContent);
// });

function handlerInput() {
  //   output.textContent = input.value.trim() || 'Anonymous';
  input.value.trim() !== ''
    ? (output.textContent = input.value.trim())
    : (output.textContent = 'Anonymous');
}

input.addEventListener('input', handlerInput);

// Напиши скрипт который, при наборе текста в
// инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
