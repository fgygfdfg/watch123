input.onButtonPressed(Button.A, function () {
    basic.showString("" + DS3231.year() + ":" + DS3231.month() + ":" + DS3231.day() + ":" + DS3231.date() + ":" + DS3231.hour() + ":" + DS3231.minute() + ":" + DS3231.second())
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(step)
    basic.pause(5000)
    led.stopAnimation()
})
let step = 0
DS3231.dateTime(
2022,
11,
27,
7,
12,
45,
10
)
step = 0
