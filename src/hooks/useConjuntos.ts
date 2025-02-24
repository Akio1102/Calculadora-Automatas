const useConjuntos = () => {
  const isSubset = <T>(A: T[], B: T[]): boolean => {
    const setB = new Set(B);
    return A.every((el) => setB.has(el));
  };

  const isMember = <T>(element: T, set: T[]): boolean =>
    new Set(set).has(element);

  const union = <T>(A: T[], B: T[]): T[] => [...new Set([...A, ...B])];

  const intersection = <T>(A: T[], B: T[]): T[] => {
    const setB = new Set(B);
    return A.filter((el) => setB.has(el));
  };

  const difference = <T>(A: T[], B: T[]): T[] => {
    const setB = new Set(B);
    return A.filter((el) => !setB.has(el));
  };

  const symmetricDifference = <T>(A: T[], B: T[]): T[] => [
    ...difference(A, B),
    ...difference(B, A),
  ];

  const complement = <T>(U: T[], B: T[]): T[] => {
    const setB = new Set(B);
    return U.filter((el) => !setB.has(el));
  };

  return {
    isSubset,
    isMember,
    union,
    intersection,
    difference,
    symmetricDifference,
    complement,
  };
};

export default useConjuntos;

