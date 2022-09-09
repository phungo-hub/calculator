let first = document.getElementById('first')
let second = document.getElementById('second')

let addButton = document.getElementById('add')
let subButton = document.getElementById('sub')
let mulButton = document.getElementById('mul')
let divButton = document.getElementById('div')

let result = document.getElementById('result')
let storedValue

function calculate() {
    addButton.onclick = function() {
        storedValue = parseFloat(first.value) + parseFloat(second.value)
        result.innerHTML = "Result: " + storedValue
    }

    subButton.onclick = function() {
        storedValue = parseFloat(first.value) - parseFloat(second.value)
        result.innerHTML = "Result: " + storedValue
    }

    mulButton.onclick = function() {
        storedValue = parseFloat(first.value) * parseFloat(second.value)
        result.innerHTML = "Result: " + storedValue
    }

    divButton.onclick = function() {
        storedValue = parseFloat(first.value) / parseFloat(second.value)
        result.innerHTML = "Result: " + storedValue
    }
}

calculate()