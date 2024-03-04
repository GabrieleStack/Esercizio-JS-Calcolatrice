let screen = document.getElementById("screen")

function insertNumber(number) {
    screen.value += number
}

function insertOperator(operator) {
    screen.value += " " + operator + " "
}

function canc() {
    screen.value = ""
}

function back() {
    screen.value = screen.value.slice(0, -1)
}

function calculateResult() {
    let expression = screen.value
    let result = eval(expression)
    screen.value = result
}

function focusScreen() {
    if(document.activeElement !== screen) {
        screen.focus()
    }


}