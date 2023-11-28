def menu_numbers():
    opcio_usuari = game.ask_for_number("Celsius to Fahrenheit")
    return opcio_usuari

def celsius_to_fahrenheit(n: number):
    result = ((n * (9 / 5)) + 32)
    return result

def fahrenheit_to_celsius(n: number):
    result = ((n - 32) * (9 / 5))
    return result

def menu_option():
    option = game.ask_for_number("Select option (1 or 2)", 1)
    return option
    
def main():
    while (1):
        game.show_long_text("""TEMPERATURE CONVERSOR:\n1.Fahrenheit to Celsius\n2.Celsius to Fahrenheit""",
            DialogLayout.FULL)
        option = menu_option()
        if option == 1:
            num = menu_numbers()
            conversion = fahrenheit_to_celsius(num)
            game.show_long_text(conversion+"ºC", DialogLayout.TOP)
        elif option == 2:
            num = menu_numbers()
            conversion = celsius_to_fahrenheit(num)
            game.show_long_text(conversion+"ºF", DialogLayout.TOP)
        else:
            game.show_long_text('''INVALID OPTION, SELECT:\n1.Fahrenheit to Celsius\n2.Celsius to Fahrenheit''',
            DialogLayout.FULL)
            option = menu_option()

main()