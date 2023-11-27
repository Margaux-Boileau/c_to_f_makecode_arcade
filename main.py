def menu():
    opcio_usuari = game.ask_for_number("Celsius to Fahrenheit")
    return opcio_usuari

def celsius_to_fahrenheit(n: number):
    result = ((n * (9 / 5)) + 32)
    return result
    
def main():
    while (1):
        game.show_long_text("CELSIUS TO FAHRENHEIT CALCULATOR", DialogLayout.CENTER)
        conversion = celsius_to_fahrenheit(menu())
        game.show_long_text(conversion, DialogLayout.TOP)
main()