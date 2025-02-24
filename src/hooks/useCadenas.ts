const useCadenas = () => {
  const length = (str: string): number => str.length

  const concatenate = (A: string, B: string): string => `${A}${B}`

  const power = (str: string, n: number): string => (n > 0 ? str.repeat(n) : "")

  const reverse = (str: string): string => [...str].reverse().join("")

  const kleeneClosure = (str: string): string => `${str}* (infinite repetitions)`

  const positiveClosure = (str: string): string => `${str}+ (at least one repetition)`

  return {
    length,
    concatenate,
    power,
    reverse,
    kleeneClosure,
    positiveClosure,
  }
}

export default useCadenas

