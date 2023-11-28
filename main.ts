function menu_numbers(): number {
    let opcio_usuari = game.askForNumber("Celsius to Fahrenheit")
    return opcio_usuari
}

function celsius_to_fahrenheit(n: number): number {
    let result = n * (9 / 5) + 32
    return result
}

function fahrenheit_to_celsius(n: number): number {
    let result = (n - 32) * (9 / 5)
    return result
}

function menu_option(): number {
    let option = game.askForNumber("Select option (1 or 2)", 1)
    return option
}

function main() {
    let option: number;
    let num: number;
    let conversion: number;
    while (1) {
        game.showLongText(`TEMPERATURE CONVERSOR:
1.Fahrenheit to Celsius
2.Celsius to Fahrenheit`, DialogLayout.Full)
        option = menu_option()
        if (option == 1) {
            num = menu_numbers()
            conversion = fahrenheit_to_celsius(num)
            game.showLongText(conversion + "ºC", DialogLayout.Top)
        } else if (option == 2) {
            num = menu_numbers()
            conversion = celsius_to_fahrenheit(num)
            game.showLongText(conversion + "ºF", DialogLayout.Top)
        } else {
            game.showLongText(`INVALID OPTION, SELECT:
1.Fahrenheit to Celsius
2.Celsius to Fahrenheit`, DialogLayout.Full)
            option = menu_option()
        }
        
    }
}

main()
