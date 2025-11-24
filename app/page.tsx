"use client";

import { useState } from "react";

export default function Home() {
  const [tipoDataset, setTipoDataset] = useState("");
  const [nivelDificultad, setNivelDificultad] = useState("");
  const [formato, setFormato] = useState("");
  const [estiloLenguaje, setEstiloLenguaje] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [estiloEntrenamiento, setEstiloEntrenamiento] = useState("");
  const [coberturaTemporal, setCoberturaTemporal] = useState("");

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Formulario de Dataset</h1>

      {/* Selección del tipo de dataset */}
      <div className="mb-4">
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

      {/* Secciones dinámicas según la selección */}
      {tipoDataset && (
        <div className="mb-6 p-4 border rounded bg-gray-50 space-y-4">
          {/* Nivel de dificultad */}
          <div>
            <label className="block mb-1 font-medium">Nivel de dificultad:</label>
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
          <div>
            <label className="block mb-1 font-medium">Formato de presentación:</label>
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

          {/* Estilo de lenguaje */}
          <div>
            <label className="block mb-1 font-medium">Estilo de lenguaje:</label>
            <select
              className="w-full border p-2 rounded"
              value={estiloLenguaje}
              onChange={(e) => setEstiloLenguaje(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="formal">Formal</option>
              <option value="coloquial">Coloquial</option>
              <option value="resumido">Resumido</option>
              <option value="detallado">Detallado</option>
              <option value="tecnico">Técnico</option>
              <option value="educativo">Educativo / estilo docente</option>
            </select>
          </div>

          {/* Cantidad de ejemplos / tamaño */}
          <div>
            <label className="block mb-1 font-medium">Cantidad de ejemplos / tamaño:</label>
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
          <div>
            <label className="block mb-1 font-medium">Estilo de entrenamiento:</label>
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

          {/* Cobertura temporal / actualización */}
          <div>
            <label className="block mb-1 font-medium">Cobertura temporal / actualización:</label>
            <select
              className="w-full border p-2 rounded"
              value={coberturaTemporal}
              onChange={(e) => setCoberturaTemporal(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              <option value="historicos">Datos históricos</option>
              <option value="recientes">Datos recientes</option>
              <option value="tiempo-real">En tiempo real (donde aplique)</option>
            </select>
          </div>
        </div>
      )}

      {/* Botón de enviar */}
      {tipoDataset && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      )}
    </div>
  );
}
