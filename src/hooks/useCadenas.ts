const useCadenas = () => ({
  /**
   * Obtiene la longitud de una cadena.
   * @param {string} str - La cadena de entrada.
   * @returns {number} - La longitud de la cadena.
   */
  length: (str: string): number => str.length,

  /**
   * Concatena dos cadenas.
   * @param {string} A - Primera cadena.
   * @param {string} B - Segunda cadena.
   * @returns {string} - La concatenación de A y B.
   */
  concatenate: (A: string, B: string): string => A + B,

  /**
   * Repite una cadena n veces.
   * @param {string} str - La cadena a repetir.
   * @param {number} n - Número de repeticiones (debe ser mayor o igual a 0).
   * @returns {string} - La cadena repetida n veces o una cadena vacía si n es 0 o menor.
   */
  power: (str: string, n: number): string => (n > 0 ? str.repeat(n) : ""),

  /**
   * Invierte una cadena de caracteres.
   * @param {string} str - La cadena a invertir.
   * @returns {string} - La cadena invertida.
   */
  reverse: (str: string): string => str.split("").reverse().join(""),
});

export default useCadenas;
