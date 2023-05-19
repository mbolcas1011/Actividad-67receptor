radio.onReceivedNumber(function (receivedNumber) {
    let recivedNumber = 0
    led.setBrightness(led.brightness() + recivedNumber)
})
radio.onReceivedString(function (receivedString) {
    let recivedString = ""
    if (recivedString == "POWER") {
        encendido = !(encendido)
        led.setBrightness(125)
        led.enable(encendido)
    }
})
let encendido = false
radio.setGroup(1)
encendido = false
led.enable(encendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
