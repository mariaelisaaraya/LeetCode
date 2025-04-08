# LeetCode
Just for Ingenias Backend

## [Two Sum](https://github.com/mariaelisaaraya/LeetCode/tree/main/0009-palindrome-number)

- Usamos un objeto (numMap) para almacenar los números como claves y sus índices como valores.
- Iteramos sobre el array y calculamos el complemento (target - num).
- Si el complemento ya existe en numMap, retornamos sus índices.
- Si no, almacenamos el número con su índice en numMap.
- Esto evita la solución bruta de O(n²) y lo resuelve en O(n).
