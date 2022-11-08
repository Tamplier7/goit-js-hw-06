const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsLi = ingredientsEl => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredientsEl;
  ingredientItem.classList.add('item');
  console.log(ingredientItem)
  return ingredientItem;
}

const ingredientItems = ingredients.map(ingredientsLi);

ingredientsList.append(...ingredientItems);
console.log(ingredientItems);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй 
// метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.