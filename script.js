const inputPrincipal = document.querySelector("#principal");
const inputYears = document.querySelector("#years");
const inputRate = document.querySelector("#rate");
const spanRange = document.querySelector("#resultRange");
const spanCompute = document.querySelector("#resultCompute");

function compute() {
    const interest = Number(inputPrincipal.value) * Number(inputRate.value) * Number(inputYears.value) / 100
    spanCompute.textContent = `If you deposit ${inputPrincipal.value},
    at an interest rate of ${inputRate.value}
    You will receive an amount of ${interest},
    in the year ${(new Date()).getFullYear() + Number(inputYears.value)}`;




}

inputRate.oninput = (event) => {
    spanRange.innerHTML = inputRate.value
    console.log(event.target.value)
}




