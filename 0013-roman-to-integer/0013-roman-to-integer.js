var romanToInt = function(s) {
    // Creamos un objeto con el valor de cada símbolo romano
    var romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    var total = 0; // Acumulador del resultado final

    // Recorremos cada letra del string
    for (var i = 0; i < s.length; i++) {
        // Obtenemos el valor del símbolo actual
        var current = romanMap[s[i]];

        // Obtenemos el valor del siguiente símbolo (si existe)
        var next = romanMap[s[i + 1]];

        // Si el siguiente número es mayor, tenemos que restar el actual
        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};