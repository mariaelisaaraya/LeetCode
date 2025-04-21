# [LeetCode](https://leetcode.com)
Just for Ingenias JavaScript

## [0001-two-sum](https://github.com/mariaelisaaraya/LeetCode/tree/main/0009-palindrome-number)

- Usamos un objeto (numMap) para almacenar los números como claves y sus índices como valores.
- Iteramos sobre el array y calculamos el complemento (target - num).
- Si el complemento ya existe en numMap, retornamos sus índices.
- Si no, almacenamos el número con su índice en numMap.
- Esto evita la solución bruta de O(n²) y lo resuelve en O(n).

## [0009-palindrome-number](https://github.com/mariaelisaaraya/LeetCode/tree/main/0009-palindrome-number)

Un palíndromo es un número (o palabra) que se lee igual de izquierda a derecha que de derecha a izquierda.

Ejemplos:
- ✅ 121 → palíndromo
- ❌ 123 → no lo es
- ❌ -121 → tampoco (el - lo rompe)

## [13-Roman-to-Integer](https://github.com/mariaelisaaraya/LeetCode/tree/main/0013-roman-to-integer)

Este código toma un número romano (como `"XIV"` o `"MCMXCIV"`) y lo convierte en un número normal (como `14` o `1994`).

¿Qué son los números romanos? Son una forma antigua de escribir números con letras. Las letras más comunes son:

¿Cómo funciona?
- Se crea un "diccionario" (romanMap) que asocia cada letra romana con su valor.
- Se recorre cada letra del número romano.
- Se compara el valor actual con el siguiente:
    - Si el siguiente es mayor → restamos el actual.
    - Si no → sumamos el actual.
- Al final, se retorna el total.
