const useAlfabetos = () => ({
  /**
   * Concatena dos conjuntos de cadenas sin duplicados.
   * @param {string[]} A - Primer conjunto de cadenas.
   * @param {string[]} B - Segundo conjunto de cadenas.
   * @returns {string} - Cadena resultante de la concatenación.
   */
  concatenate: (A: string[], B: string[]): string =>
    [...new Set([...A, ...B])].join(""),

  /**
   * Genera el conjunto potencia de un conjunto de cadenas hasta una longitud dada.
   * @param {string[]} arr - Conjunto de cadenas.
   * @param {number} n - Longitud máxima del conjunto potencia.
   * @returns {string[]} - Conjunto potencia resultante.
   */
  power: (arr: string[], n: number): string[] => {
    const uniqueArr = [...new Set(arr)];

    const generatePowerSet = (arr: string[], length: number): string[] =>
      length === 1
        ? arr
        : generatePowerSet(arr, length - 1).flatMap((prefix) =>
            arr.map((el) => prefix + el)
          );

    return n > 0 ? generatePowerSet(uniqueArr, n) : [];
  },

  /**
   * Invierte cada cadena dentro de un conjunto de cadenas.
   * @param {string[]} arr - Conjunto de cadenas.
   * @returns {string[]} - Conjunto con las cadenas invertidas.
   */
  reverse: (arr: string[]): string[] =>
    [...new Set(arr)].map((str) => str.split("").reverse().join("")).reverse(),

  /**
   * Obtiene la unión de dos conjuntos de cadenas.
   * @param {string[]} A - Primer conjunto.
   * @param {string[]} B - Segundo conjunto.
   * @returns {string[]} - Conjunto resultante de la unión.
   */
  union: (A: string[], B: string[]): string[] => [...new Set([...A, ...B])],

  /**
   * Obtiene la intersección de dos conjuntos de cadenas.
   * @param {string[]} A - Primer conjunto.
   * @param {string[]} B - Segundo conjunto.
   * @returns {string[]} - Conjunto con los elementos comunes.
   */
  intersection: (A: string[], B: string[]): string[] => {
    const setA = new Set(A);
    return [...new Set(B.filter((el) => setA.has(el)))];
  },

  /**
   * Obtiene la diferencia entre dos conjuntos de cadenas.
   * @param {string[]} A - Primer conjunto.
   * @param {string[]} B - Segundo conjunto.
   * @param {boolean} [fromB=false] - Si `true`, calcula `B - A`, de lo contrario, `A - B`.
   * @returns {string[]} - Conjunto resultante de la diferencia.
   */
  difference: (A: string[], B: string[], fromB: boolean = false): string[] => {
    const setA = new Set(A);
    const setB = new Set(B);
    return [...(fromB ? setB : setA)].filter(
      (el) => !(fromB ? setA : setB).has(el)
    );
  },

  /**
   * Calcula la clausura de Kleene de un conjunto de cadenas.
   * @param {string[]} L - Conjunto de cadenas base.
   * @param {number} [maxIterations=10] - Número máximo de iteraciones para la clausura.
   * @returns {string[]} - Clausura de Kleene del conjunto.
   */
  kleeneClosure: (L: string[], maxIterations: number = 10): string[] => {
    let result = new Set([""]);
    let current = new Set(L);
    for (let i = 1; i <= maxIterations; i++) {
      result = new Set([...result, ...current]);
      current = new Set([...current].flatMap((el) => L.map((l) => el + l)));
    }
    return [...result];
  },

  /**
   * Calcula la clausura positiva de un conjunto de cadenas.
   * @param {string[]} L - Conjunto de cadenas base.
   * @param {number} [maxIterations=10] - Número máximo de iteraciones para la clausura.
   * @returns {string[]} - Clausura positiva del conjunto.
   */
  positiveClosure: (L: string[], maxIterations: number = 10): string[] => {
    let result = new Set(L);
    let current = new Set(L);
    for (let i = 1; i < maxIterations; i++) {
      current = new Set([...current].flatMap((el) => L.map((l) => el + l)));
      result = new Set([...result, ...current]);
    }
    return [...result];
  },
});

export default useAlfabetos;
