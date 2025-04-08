/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    // Si el número es negativo, no puede ser palíndromo (ej: -121 ≠ 121-)
    if (x < 0) return false;
    // Convertimos el número a string (ej: 121 → "121")
    var str = x.toString();
    // Invertimos el string:
    // - split('') → separa los caracteres → ["1", "2", "1"]
    // - reverse() → los invierte → ["1", "2", "1"]
    // - join('') → los junta → "121"
    var reversedStr = str.split('').reverse().join('');
    // Comparamos el original con el invertido:
    // Si son iguales, es un palíndromo → true
    // Si son distintos, no lo es → false
    return str === reversedStr;
};