function increaseCounterBy(increaseValue) {
    const counterValue = document.getElementById("counter-value");
    let value = parseInt(counterValue.textContent);

    value += increaseValue;
    if(value < 1) value = 1;

    counterValue.textContent = value.toString().padStart(2, "0");
}