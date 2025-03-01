const useConjuntos = () => ({
  /**
   * Verifica si el conjunto A es un subconjunto de B.
   * @param {string[]} A - Conjunto A.
   * @param {string[]} B - Conjunto B.
   * @returns {boolean} - `true` si A es subconjunto de B, de lo contrario `false`.
   */
  isSubset: (A: string[], B: string[]): boolean => {
    const setB = new Set(B);
    return A.every((el) => setB.has(el));
  },

  /**
   * Verifica si un elemento pertenece a un conjunto.
   * @param {string} element - Elemento a verificar.
   * @param {string[]} set - Conjunto donde buscar.
   * @returns {boolean} - `true` si el elemento está en el conjunto, de lo contrario `false`.
   */
  isMember: (element: string, set: string[]): boolean =>
    new Set(set).has(element),

  /**
   * Obtiene la unión de dos conjuntos.
   * @param {string[]} A - Primer conjunto.
   * @param {string[]} B - Segundo conjunto.
   * @returns {string[]} - Conjunto resultante de la unión.
   */
  union: (A: string[], B: string[]): string[] => [...new Set([...A, ...B])],

  /**
   * Obtiene la intersección de dos conjuntos.
   * @param {string[]} A - Primer conjunto.
   * @param {string[]} B - Segundo conjunto.
   * @returns {string[]} - Conjunto con los elementos comunes.
   */
  intersection: (A: string[], B: string[]): string[] => {
    const setA = new Set(A);
    return B.filter((el) => setA.has(el));
  },

  /**
   * Obtiene la diferencia entre dos conjuntos (A - B).
   * @param {string[]} A - Primer conjunto.
   * @param {string[]} B - Segundo conjunto.
   * @returns {string[]} - Conjunto con los elementos de A que no están en B.
   */
  difference: (A: string[], B: string[]): string[] => {
    const setB = new Set(B);
    return A.filter((el) => !setB.has(el));
  },

  /**
   * Obtiene la diferencia simétrica entre dos conjuntos.
   * @param {string[]} A - Primer conjunto.
   * @param {string[]} B - Segundo conjunto.
   * @returns {string[]} - Conjunto con los elementos que están en A o B, pero no en ambos.
   */
  symmetricDifference: (A: string[], B: string[]): string[] =>
    [...new Set([...A, ...B])].filter(
      (el) => !(new Set(A).has(el) && new Set(B).has(el))
    ),

  /**
   * Obtiene el complemento de un conjunto respecto a un universo U.
   * @param {string[]} U - Conjunto universo.
   * @param {string[]} B - Conjunto a complementar.
   * @returns {string[]} - Conjunto con los elementos de U que no están en B.
   */
  complement: (U: string[], B: string[]): string[] => {
    const setB = new Set(B);
    return U.filter((el) => !setB.has(el));
  },
});

export default useConjuntos;
