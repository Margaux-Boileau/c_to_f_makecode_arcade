function menu(): number {
    let opcio_usuari = game.askForNumber("Celsius to Fahrenheit")
    return opcio_usuari
}

function celsius_to_fahrenheit(n: number) {
    let result = n * (9 / 5) + 32
    return result
}

function main() {
    let conversion: any;
    while (1) {
        game.showLongText("CELSIUS TO FAHRENHEIT CALCULATOR", DialogLayout.Center)
        conversion = celsius_to_fahrenheit(menu())
        game.showLongText(conversion, DialogLayout.Top)
    }
}

main()
