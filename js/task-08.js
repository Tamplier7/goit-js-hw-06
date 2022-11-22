const inputForm = document.querySelector('.login-form');
const inputDataObj = {};

const onSubmitValidation = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = inputForm;

  const inputEmailValue = email.value;
  const inputPasswordlValue = password.value;

  if (!inputPasswordlValue || !inputEmailValue) {
    alert('Все поля должны быть заполнены!');
    inputForm.reset();
    return;
  }

  inputDataObj['email'] = inputEmailValue;
  inputDataObj.password = inputPasswordlValue;

  console.log(inputDataObj);

  inputForm.reset();
};

inputForm.addEventListener('submit', onSubmitValidation);
// Обработка отправки формы form.login - form
// должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля,
// выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль
// и очисти значения полей формы методом reset.
