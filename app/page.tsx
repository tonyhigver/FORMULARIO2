"use client";

import { useState } from "react";

export default function Home() {
  const [tipoDataset, setTipoDataset] = useState("");
  const [nivelDificultad, setNivelDificultad] = useState("");
  const [formato, setFormato] = useState("");
  const [estiloLenguaje, setEstiloLenguaje] = useState<string[]>([]);
  const [cantidad, setCantidad] = useState("");
  const [estiloEntrenamiento, setEstiloEntrenamiento] = useState("");
  const [coberturaTemporal, setCoberturaTemporal] = useState<string[]>([]);
  const [nivelContexto, setNivelContexto] = useState<string[]>([]);
  const [tipoContenido, setTipoContenido] = useState<string[]>([]);

  const cardStyle = "p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition duration-200";

  const toggleSelection = (value: string, arr: string[], setArr: (v: string[]) => void) => {
    if (arr.includes(value)) {
      setArr(arr.filter((v) => v !== value));
    } else {
      setArr([...arr, value]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Formulario de Dataset Interactivo</h1>

      {/* Tipo de Dataset */}
      <div className={cardStyle}>
        <label className="block mb-2 font-medium">Tipo de Dataset:</label>
        <select
          className="w-full border p-2 rounded"
          value={tipoDataset}
          onChange={(e) => setTipoDataset(e.target.value)}
        >
          <option value="">-- Selecciona --</option>
          <option value="contexto">Datasets con más contexto</option>
          <option value="especializado">Datasets de campo especializado</option>
          <option value="mixtos">Datasets mixtos / adaptativos</option>
        </select>
      </div>

      {tipoDataset && (
        <div className="space-y-4">
          {/* Nivel de dificultad */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Nivel de dificultad:</label>
            <select
              className="w-full border p-2 rounded"
              value={nivelDificultad}
              onChange={(e) => setNivelDificultad(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
              <option value="experto">Experto</option>
            </select>
          </div>

          {/* Formato de presentación */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Formato de presentación:</label>
            <select
              className="w-full border p-2 rounded"
              value={formato}
              onChange={(e) => setFormato(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="markdown">Markdown</option>
              <option value="xlsx">XLSX</option>
              <option value="parquet">Parquet</option>
              <option value="txt">TXT</option>
            </select>
          </div>

          {/* Estilo de lenguaje (multi) */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Estilo de lenguaje:</label>
            <div className="space-y-1">
              {["Formal", "Coloquial", "Resumido", "Detallado", "Técnico", "Educativo / estilo docente"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={estiloLenguaje.includes(item)}
                    onChange={() => toggleSelection(item, estiloLenguaje, setEstiloLenguaje)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Nivel de contexto / profundidad (multi) */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Nivel de contexto / profundidad:</label>
            <div className="space-y-1">
              {["Ejemplos simples", "Explicaciones detalladas", "Pasos de razonamiento", "Análisis crítico"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={nivelContexto.includes(item)}
                    onChange={() => toggleSelection(item, nivelContexto, setNivelContexto)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Tipo de contenido (multi) */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Tipo de contenido:</label>
            <div className="space-y-1">
              {["Pregunta-respuesta", "Explicación", "Casos de estudio", "Ejercicios con solución", "Simulaciones", "Prompts para IA"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={tipoContenido.includes(item)}
                    onChange={() => toggleSelection(item, tipoContenido, setTipoContenido)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Cantidad de ejemplos / tamaño */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Cantidad de ejemplos / tamaño:</label>
            <select
              className="w-full border p-2 rounded"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="1k">1k</option>
              <option value="5k">5k</option>
              <option value="10k">10k</option>
              <option value="50k">50k</option>
              <option value="100k">100k</option>
            </select>
          </div>

          {/* Estilo de entrenamiento */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Estilo de entrenamiento:</label>
            <select
              className="w-full border p-2 rounded"
              value={estiloEntrenamiento}
              onChange={(e) => setEstiloEntrenamiento(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="pasivo">Dataset “pasivo” (ejemplos estáticos)</option>
              <option value="interactivo">Dataset “interactivo” (ejemplos con variantes, preguntas de autoevaluación)</option>
            </select>
          </div>

          {/* Cobertura temporal / actualización (multi) */}
          <div className={cardStyle}>
            <label className="block mb-2 font-medium">Cobertura temporal / actualización:</label>
            <div className="space-y-1">
              {["Datos históricos", "Datos recientes", "En tiempo real (donde aplique)"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={coberturaTemporal.includes(item)}
                    onChange={() => toggleSelection(item, coberturaTemporal, setCoberturaTemporal)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Botón de envío */}
      {tipoDataset && (
        <div className="text-center mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
}
