const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);

function changeClass(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}
function removeClass(remove1, remove2) {
  input.classList.remove(remove1);
  input.classList.remove(remove2);
}

function onFocusChangeValidation(event) {
  if (event.currentTarget.value.length === dataLength) {
    // input.classList.add('valid');
    // input.classList.remove('invalid');
    changeClass('valid', 'invalid');
  } else if (event.currentTarget.value.length === 0) {
    removeClass('valid', 'invalid');
  } else {
    // input.classList.remove('valid');
    // input.classList.add('invalid');
    changeClass('invalid', 'valid');
  }
}

input.addEventListener('blur', onFocusChangeValidation);

// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//   проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
//   то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//   которые мы уже добавили в исходные файлы задания.
