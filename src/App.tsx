"use client"

import "./App.css"
import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { FaCalculator, FaChevronDown } from "react-icons/fa"
import useCadenas from "./hooks/useCadenas"
import useConjuntos from "./hooks/useConjuntos"

type Operation =
  | "length"
  | "concatenate"
  | "power"
  | "reverse"
  | "kleeneClosure"
  | "positiveClosure"
  | "isSubset"
  | "isMember"
  | "union"
  | "intersection"
  | "difference"
  | "symmetricDifference"
  | "complement"

const operationDescriptions: Record<Operation, string> = {
  length: "Calcula la longitud de la cadena de entrada.",
  concatenate: "Une dos cadenas de texto.",
  power: "Repite la cadena un número específico de veces.",
  reverse: "Invierte el orden de los caracteres en la cadena.",
  kleeneClosure: "Representa la repetición infinita de la cadena (a*).",
  positiveClosure: "Representa al menos una repetición de la cadena (a+).",
  isSubset: "Verifica si el primer conjunto es un subconjunto del segundo.",
  isMember: "Comprueba si el elemento está en el conjunto.",
  union: "Combina elementos únicos de ambos conjuntos.",
  intersection: "Encuentra elementos comunes en ambos conjuntos.",
  difference: "Elementos en el primer conjunto pero no en el segundo.",
  symmetricDifference: "Elementos que están en uno u otro conjunto, pero no en ambos.",
  complement: "Elementos del conjunto universal que no están en el conjunto dado.",
}

const App = () => {
  const [operation, setOperation] = useState<Operation>("length")
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [result, setResult] = useState<string | boolean | number>("")
  const [error, setError] = useState("")

  const cadenas = useCadenas()
  const conjuntos = useConjuntos()

  const validateInput = (input: string): boolean => {
    return /^[a-zA-Z0-9]*$/.test(input)
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    inputSetter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const value = e.target.value
    if (validateInput(value)) {
      inputSetter(value)
      setError("")
    } else {
      setError("Solo se permiten letras y números, sin espacios ni caracteres especiales.")
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError("")

    switch (operation) {
      case "length":
        setResult(cadenas.length(input1))
        break
      case "concatenate":
        setResult(cadenas.concatenate(input1, input2))
        break
      case "power":
        setResult(cadenas.power(input1, Number.parseInt(input2)))
        break
      case "reverse":
        setResult(cadenas.reverse(input1))
        break
      case "kleeneClosure":
        setResult(cadenas.kleeneClosure(input1))
        break
      case "positiveClosure":
        setResult(cadenas.positiveClosure(input1))
        break
      case "isSubset":
        setResult(conjuntos.isSubset(input1.split(""), input2.split("")))
        break
      case "isMember":
        setResult(conjuntos.isMember(input1[0], input2.split("")))
        break
      case "union":
        setResult(conjuntos.union(input1.split(""), input2.split("")).join(""))
        break
      case "intersection":
        setResult(conjuntos.intersection(input1.split(""), input2.split("")).join(""))
        break
      case "difference":
        setResult(conjuntos.difference(input1.split(""), input2.split("")).join(""))
        break
      case "symmetricDifference":
        setResult(conjuntos.symmetricDifference(input1.split(""), input2.split("")).join(""))
        break
      case "complement":
        setResult(conjuntos.complement(input1.split(""), input2.split("")).join(""))
        break
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center justify-center">
          <FaCalculator className="mr-2" />
          Calculadora
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value as Operation)}
              className="w-full p-4 pr-10 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-gray-700 cursor-pointer"
            >
              <optgroup label="Operaciones con Cadenas" className="font-semibold">
                <option value="length">Longitud</option>
                <option value="concatenate">Concatenación</option>
                <option value="power">Potencia</option>
                <option value="reverse">Invertir</option>
                <option value="kleeneClosure">Clausura de Kleene</option>
                <option value="positiveClosure">Clausura Positiva</option>
              </optgroup>
              <optgroup label="Operaciones con Conjuntos" className="font-semibold">
                <option value="isSubset">Es Subconjunto</option>
                <option value="isMember">Es Miembro</option>
                <option value="union">Unión</option>
                <option value="intersection">Intersección</option>
                <option value="difference">Diferencia</option>
                <option value="symmetricDifference">Diferencia Simétrica</option>
                <option value="complement">Complemento</option>
              </optgroup>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <p className="text-sm text-gray-600 italic">{operationDescriptions[operation]}</p>
          <input
            type="text"
            value={input1}
            onChange={(e) => handleInputChange(e, setInput1)}
            placeholder="Entrada 1"
            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          {[
            "concatenate",
            "power",
            "isSubset",
            "isMember",
            "union",
            "intersection",
            "difference",
            "symmetricDifference",
            "complement",
          ].includes(operation) && (
            <input
              type="text"
              value={input2}
              onChange={(e) => handleInputChange(e, setInput2)}
              placeholder="Entrada 2"
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          )}
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Calcular
          </button>
        </form>
        {result !== "" && (
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <h3 className="font-semibold text-indigo-700 mb-2">Resultado:</h3>
            <p className="text-indigo-900">{result.toString()}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

