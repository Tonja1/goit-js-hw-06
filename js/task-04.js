const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-ection="decrement"]');
const incrementBtn = document.querySelector('[data-ection="increment"]');
const valueEl = document.querySelector('[id="value"]');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;
});