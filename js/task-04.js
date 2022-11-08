const refs = {
    valueEl: document.querySelector('#value'),
    incrementButtonEl: document.querySelector('button[data-action="increment"]'),
    decrementButtonEl: document.querySelector('button[data-action="decrement"]'),
}
const clickFunction =   {
    value: 0,
    incMetod() {
        this.value += 1;
        return refs.valueEl.textContent = this.value
    },
    decMetod() {
        this.value -= 1;
        return refs.valueEl.textContent = this.value
    },
}

refs.incrementButtonEl.addEventListener('click', clickFunction.incMetod.bind(clickFunction));
refs.decrementButtonEl.addEventListener('click', clickFunction.decMetod.bind(clickFunction));
