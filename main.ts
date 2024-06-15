input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("GRADE")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * 1.8 + 32)
    basic.showString("TEMPERATURA")
})
