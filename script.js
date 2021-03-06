const inputPrincipal = document.querySelector("#principal");
const inputYears = document.querySelector("#years");
const inputRate = document.querySelector("#rate");
const spanRange = document.querySelector("#resultRange");
const spanCompute = document.querySelector("#resultCompute");
const errorMessageElement = document.querySelector('.error-message');

function compute() {
    validateForm();
    const interest = Number(inputPrincipal.value) * Number(inputRate.value) * Number(inputYears.value) / 100
    spanCompute.innerHTML = `<p align="justify">If you deposit <span class="highlighted">${inputPrincipal.value} </span>,
    at an interest rate of <span class="highlighted">${inputRate.value}</span>
    You will receive an amount of <span class="highlighted"> ${interest}</span>,
    in the year <span class="highlighted"> ${(new Date()).getFullYear() + Number(inputYears.value)}</span></p>`;
    reset();
}

function reset() {
   inputPrincipal.value = ''; 
   inputYears.value = ''; 
   inputRate.value = '';
   spanRange.innerHTML = '10.25';
   inputPrincipal.focus();
}

function validateForm () {
    if(inputPrincipal.value <= 0) {
        errorMessageElement.style.display = 'block';
        alert('Insert a positive number');
        inputPrincipal.focus();

    } else if (errorMessageElement.style.display === 'block') {
        errorMessageElement.style.display = 'none';
    }
}

function updateRangeSpan() {
    spanRange.innerHTML = inputRate.value
}
