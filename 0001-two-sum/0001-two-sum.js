/**
//Todo lo verde son comentarios para Ingenias
 * @param {number[]} nums - Array de números enteros
 * @param {number} target - Número objetivo que se desea obtener al sumar dos de los números del array
 * @return {number[]} - Índices de los dos números cuya suma da como resultado el target
 */
function twoSum(nums, target) {
    // Creamos un objeto (diccionario) para guardar los números que ya vimos
    // como claves, y sus respectivos índices como valores.
    let numMap = {}; 

    // Recorremos el array nums una sola vez
    for (let i = 0; i < nums.length; i++) {
        /// Guardamos el número actual
        let current = nums[i]; 

        //// Calculamos cuánto le falta a 'current' para llegar al target
        let complement = target - current; 

        // Si ya vimos el número que complementa al actual, es decir, si está en numMap...
        if (complement in numMap) {
            // ...entonces encontramos la respuesta: los índices del complemento y del actual
            return [numMap[complement], i];
        }

        // Si no encontramos el complemento, guardamos el número actual y su índice
        numMap[current] = i;
    }

    // En teoría, nunca llegamos a esta línea porque el problema garantiza que siempre hay una solución
    return [];
}