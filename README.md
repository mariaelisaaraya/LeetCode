# LeetCode
Just for Ingenias Backend

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
